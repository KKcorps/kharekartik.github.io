import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { access, mkdtemp, readFile, rm } from 'node:fs/promises';
import net from 'node:net';
import os from 'node:os';
import path from 'node:path';

const root = process.cwd();
const slugs = [
	'pac-man',
	'space-invaders',
	'pong',
	'tetris',
	'snake',
	'breakout',
	'tron',
	'missile-command',
	'asteroids',
	'galaga',
];
const primaryActionGames = new Set([
	'space-invaders',
	'tetris',
	'breakout',
	'missile-command',
	'asteroids',
	'galaga',
]);
const secondaryActionGames = new Set(['tetris']);

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const terminate = async (child) => {
	if (!child || child.exitCode !== null || child.signalCode !== null) return;
	const exited = new Promise((resolve) => child.once('exit', resolve));
	try {
		process.kill(-child.pid, 'SIGTERM');
	} catch {
		child.kill('SIGTERM');
	}
	await Promise.race([exited, delay(2_000)]);
};

const getFreePort = () =>
	new Promise((resolve, reject) => {
		const server = net.createServer();
		server.once('error', reject);
		server.listen(0, '127.0.0.1', () => {
			const address = server.address();
			if (!address || typeof address === 'string') {
				server.close();
				reject(new Error('Could not allocate a local test port.'));
				return;
			}
			server.close(() => resolve(address.port));
		});
	});

const waitForFetch = async (url, timeout = 15_000) => {
	const deadline = Date.now() + timeout;
	let lastError;
	while (Date.now() < deadline) {
		try {
			const response = await fetch(url);
			if (response.ok) return response;
		} catch (error) {
			lastError = error;
		}
		await delay(100);
	}
	throw new Error(`Timed out waiting for ${url}: ${lastError?.message ?? 'no response'}`);
};

class CdpClient {
	constructor(webSocketUrl) {
		this.socket = new WebSocket(webSocketUrl);
		this.nextId = 1;
		this.pending = new Map();
		this.waiters = new Map();
		this.exceptions = [];
	}

	async connect() {
		await new Promise((resolve, reject) => {
			this.socket.addEventListener('open', resolve, { once: true });
			this.socket.addEventListener('error', reject, { once: true });
		});
		this.socket.addEventListener('message', (event) => {
			const message = JSON.parse(String(event.data));
			if (message.id) {
				const pending = this.pending.get(message.id);
				if (!pending) return;
				this.pending.delete(message.id);
				if (message.error) pending.reject(new Error(message.error.message));
				else pending.resolve(message.result);
				return;
			}
			if (message.method === 'Runtime.exceptionThrown') {
				this.exceptions.push(message.params.exceptionDetails.text);
			}
			const waiters = this.waiters.get(message.method) ?? [];
			this.waiters.delete(message.method);
			waiters.forEach((waiter) => waiter.resolve(message.params));
		});
	}

	call(method, params = {}) {
		const id = this.nextId++;
		return new Promise((resolve, reject) => {
			this.pending.set(id, { resolve, reject });
			this.socket.send(JSON.stringify({ id, method, params }));
		});
	}

	waitForEvent(method, timeout = 10_000) {
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => {
				reject(new Error(`Timed out waiting for CDP event ${method}`));
			}, timeout);
			const waiter = {
				resolve: (value) => {
					clearTimeout(timer);
					resolve(value);
				},
			};
			this.waiters.set(method, [...(this.waiters.get(method) ?? []), waiter]);
		});
	}

	async navigate(url) {
		const loaded = this.waitForEvent('Page.loadEventFired');
		await this.call('Page.navigate', { url });
		await loaded;
	}

	async evaluate(expression) {
		const response = await this.call('Runtime.evaluate', {
			expression,
			awaitPromise: true,
			returnByValue: true,
		});
		if (response.exceptionDetails) throw new Error(response.exceptionDetails.text);
		return response.result.value;
	}

	async waitForExpression(expression, timeout = 8_000) {
		const deadline = Date.now() + timeout;
		while (Date.now() < deadline) {
			if (await this.evaluate(expression)) return;
			await delay(50);
		}
		throw new Error(`Timed out waiting for browser expression: ${expression}`);
	}

	close() {
		this.socket.close();
	}
}

const source = await readFile(path.join(root, 'src/pages/index.astro'), 'utf8');
const previewSlugs = [...source.matchAll(/createArt\(\s*'([^']+)'/g)].map((match) => match[1]);
assert.deepEqual(previewSlugs, slugs, 'Homepage preview inventory must match the playable arcade inventory.');
assert.match(source, /data-arcade-base/, 'The homepage preview must link to its matching arcade route.');

for (const slug of slugs) {
	const routePath = path.join(root, 'dist', 'arcade', slug, 'index.html');
	await access(routePath);
	const html = await readFile(routePath, 'utf8');
	assert.match(html, new RegExp(`data-arcade-game="${slug}"`), `${slug} route must identify its game engine.`);
	assert.match(html, /id="arcade-canvas"/, `${slug} route must render the game canvas.`);
	assert.match(html, /data-control="restart"/, `${slug} route must render touch controls.`);
}

const previewPort = await getFreePort();
const debugPort = await getFreePort();
const profileDirectory = await mkdtemp(path.join(os.tmpdir(), 'ascii-arcade-chrome-'));
const previewOutput = [];
const chromeOutput = [];
const preview = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(previewPort)], {
	cwd: root,
	detached: true,
	stdio: ['ignore', 'pipe', 'pipe'],
});
preview.stdout.on('data', (chunk) => previewOutput.push(String(chunk)));
preview.stderr.on('data', (chunk) => previewOutput.push(String(chunk)));

let chrome;
let client;
try {
	await waitForFetch(`http://127.0.0.1:${previewPort}/arcade/pac-man/`);
	const chromeBinary = process.env.CHROME_BIN ?? '/usr/bin/google-chrome';
	chrome = spawn(
		chromeBinary,
		[
			'--headless=new',
			'--no-sandbox',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--no-first-run',
			'--no-default-browser-check',
			`--remote-debugging-port=${debugPort}`,
			`--user-data-dir=${profileDirectory}`,
			'about:blank',
		],
		{ detached: true, stdio: ['ignore', 'ignore', 'pipe'] },
	);
	chrome.stderr.on('data', (chunk) => chromeOutput.push(String(chunk)));
	const targetsResponse = await waitForFetch(`http://127.0.0.1:${debugPort}/json/list`);
	const targets = await targetsResponse.json();
	const target = targets.find((candidate) => candidate.type === 'page');
	assert.ok(target?.webSocketDebuggerUrl, 'Chrome must expose a page debugging target.');
	client = new CdpClient(target.webSocketDebuggerUrl);
	await client.connect();
	await client.call('Page.enable');
	await client.call('Runtime.enable');
	await client.call('Emulation.setDeviceMetricsOverride', {
		width: 390,
		height: 844,
		deviceScaleFactor: 1,
		mobile: true,
	});
	await client.navigate(`http://127.0.0.1:${previewPort}/`);
	for (const [index, slug] of slugs.entries()) {
		const previousIndex = (index - 1 + slugs.length) % slugs.length;
		await client.evaluate(`localStorage.setItem('home-art-cycle-index', '${previousIndex}')`);
		await client.navigate(`http://127.0.0.1:${previewPort}/?arcade-link=${index}`);
		await client.waitForExpression(`document.querySelector('.ascii-bug-block')?.pathname === '/arcade/${slug}/'`);
		const featuredHref = await client.evaluate(`document.querySelector('.ascii-bug-block').pathname`);
		assert.equal(featuredHref, `/arcade/${slug}/`, `Homepage preview ${slug} must open its matching game screen.`);
	}

	for (const slug of slugs) {
		await client.navigate(`http://127.0.0.1:${previewPort}/arcade/${slug}/`);
		await client.waitForExpression('Boolean(window.__asciiArcade)');
		const initial = await client.evaluate(`(() => {
			const canvas = document.getElementById('arcade-canvas');
			const rect = canvas.getBoundingClientRect();
			const buttons = [...document.querySelectorAll('button:not(:disabled)')].map((button) => {
				const box = button.getBoundingClientRect();
				return { label: button.textContent.trim(), width: box.width, height: box.height };
			});
			const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
			let hash = 2166136261;
			for (let index = 0; index < pixels.length; index += 97) hash = Math.imul(hash ^ pixels[index], 16777619);
			return {
				snapshot: window.__asciiArcade.snapshot(),
				hash: hash >>> 0,
				viewport: window.innerWidth,
				pageWidth: document.documentElement.scrollWidth,
				canvas: { left: rect.left, right: rect.right, width: rect.width },
				buttons,
			};
		})()`);
		assert.equal(initial.snapshot.slug, slug, `${slug} must initialize the matching engine.`);
		assert.equal(initial.snapshot.phase, 'ready', `${slug} must begin in a ready state.`);
		assert.ok(initial.canvas.width > 300, `${slug} canvas must remain legible on a 390px mobile viewport.`);
		assert.ok(initial.canvas.left >= 0 && initial.canvas.right <= initial.viewport + 0.5, `${slug} canvas must fit the mobile viewport.`);
		assert.ok(initial.pageWidth <= initial.viewport, `${slug} must not create horizontal mobile overflow.`);
		for (const button of initial.buttons) {
			assert.ok(button.width >= 44 && button.height >= 44, `${slug} control "${button.label}" must meet the 44px mobile tap target.`);
		}

		await client.evaluate(`document.getElementById('arcade-start').click()`);
		if (primaryActionGames.has(slug)) {
			await client.evaluate(`(() => {
				const button = document.querySelector('[data-control="action"]:not(:disabled)');
				button.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 41 }));
				button.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 41 }));
			})()`);
		}
		if (secondaryActionGames.has(slug)) {
			await client.evaluate(`(() => {
				const button = document.querySelector('[data-control="secondary"]:not(:disabled)');
				button.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 42 }));
				button.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 42 }));
			})()`);
		}
		await client.evaluate(`(() => {
			const button = document.querySelector('.arcade-control:not(:disabled)');
			button.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 43 }));
		})()`);
		await delay(180);
		await client.evaluate(`(() => {
			const button = document.querySelector('.arcade-control:not(:disabled)');
			button.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 43 }));
		})()`);
		await delay(620);
		const active = await client.evaluate(`(() => {
			const canvas = document.getElementById('arcade-canvas');
			const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
			let hash = 2166136261;
			for (let index = 0; index < pixels.length; index += 97) hash = Math.imul(hash ^ pixels[index], 16777619);
			return { snapshot: window.__asciiArcade.snapshot(), hash: hash >>> 0 };
		})()`);
		assert.ok(active.snapshot.frame > initial.snapshot.frame + 5, `${slug} must advance its runtime loop.`);
		assert.equal(active.snapshot.phase, 'playing', `${slug} must remain playable after accepting input.`);
		assert.notEqual(active.hash, initial.hash, `${slug} must render changing game state after start.`);
		await client.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'p', code: 'KeyP', windowsVirtualKeyCode: 80 });
		await client.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'p', code: 'KeyP', windowsVirtualKeyCode: 80 });
		assert.equal((await client.evaluate('window.__asciiArcade.snapshot()')).phase, 'paused', `${slug} must pause from the keyboard.`);
		await client.call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'p', code: 'KeyP', windowsVirtualKeyCode: 80 });
		await client.call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'p', code: 'KeyP', windowsVirtualKeyCode: 80 });
		assert.equal((await client.evaluate('window.__asciiArcade.snapshot()')).phase, 'playing', `${slug} must resume from the keyboard.`);
		process.stdout.write(`✓ ${slug}\n`);
	}

	assert.deepEqual(client.exceptions, [], `Arcade routes raised browser exceptions: ${client.exceptions.join(', ')}`);
	process.stdout.write(`\nVerified ${slugs.length} playable ASCII games at a 390 × 844 mobile viewport.\n`);
} catch (error) {
	if (previewOutput.length) process.stderr.write(`\nPreview output:\n${previewOutput.join('')}\n`);
	if (chromeOutput.length) process.stderr.write(`\nChrome output:\n${chromeOutput.join('')}\n`);
	throw error;
} finally {
	client?.close();
	await terminate(chrome);
	await terminate(preview);
	await rm(profileDirectory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
}
