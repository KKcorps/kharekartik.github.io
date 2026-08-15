import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const siteOrigin = 'https://kharekartik.dev';
const failures = [];
const warnings = [];

async function listFiles(directory) {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const entryPath = path.join(directory, entry.name);
			return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
		}),
	);

	return files.flat();
}

function walk(node, visit) {
	visit(node);
	for (const child of node.childNodes ?? []) {
		walk(child, visit);
	}
	if (node.content) {
		walk(node.content, visit);
	}
}

function elements(document, tagName) {
	const matches = [];
	walk(document, (node) => {
		if (node.tagName === tagName) {
			matches.push(node);
		}
	});
	return matches;
}

function attr(node, name) {
	return node.attrs?.find((attribute) => attribute.name === name)?.value;
}

function textContent(node) {
	if (node.nodeName === '#text') {
		return node.value ?? '';
	}
	return (node.childNodes ?? []).map(textContent).join('');
}

function routeForHtml(file) {
	const relativePath = path.relative(distDir, file).split(path.sep).join('/');
	if (relativePath === 'index.html') {
		return '/';
	}
	if (relativePath.endsWith('/index.html')) {
		return `/${relativePath.slice(0, -'index.html'.length)}`;
	}
	return `/${relativePath}`;
}

function hasSchemaType(value, expectedType) {
	if (Array.isArray(value)) {
		return value.some((item) => hasSchemaType(item, expectedType));
	}
	if (!value || typeof value !== 'object') {
		return false;
	}
	const type = value['@type'];
	if (type === expectedType || (Array.isArray(type) && type.includes(expectedType))) {
		return true;
	}
	return Object.values(value).some((item) => hasSchemaType(item, expectedType));
}

function requireOne(items, label, route) {
	if (items.length !== 1) {
		failures.push(`${route}: expected one ${label}, found ${items.length}`);
	}
}

function decodeXml(value) {
	return value
		.replaceAll('&amp;', '&')
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&quot;', '"')
		.replaceAll('&apos;', "'");
}

function outputPathForUrl(url) {
	const pathname = new URL(url).pathname;
	return pathname.endsWith('/')
		? path.join(distDir, pathname, 'index.html')
		: path.join(distDir, pathname);
}

async function exists(file) {
	try {
		await access(file);
		return true;
	} catch {
		return false;
	}
}

async function checkHtml() {
	const allFiles = await listFiles(distDir);
	const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
	const indexablePages = [];
	const titles = new Map();
	const descriptions = new Map();

	for (const file of htmlFiles) {
		const route = routeForHtml(file);
		const html = await readFile(file, 'utf8');
		const document = parse(html);
		const metas = elements(document, 'meta');
		const robots = metas
			.filter((meta) => attr(meta, 'name')?.toLowerCase() === 'robots')
			.map((meta) => attr(meta, 'content')?.toLowerCase() ?? '');
		const isNoindex = robots.some((content) => content.includes('noindex'));

		if (route.startsWith('/widgets/')) {
			if (!isNoindex) {
				failures.push(`${route}: widget is missing a noindex robots directive`);
			}
			continue;
		}

		if (isNoindex) {
			continue;
		}

		const titleElements = elements(document, 'title');
		const descriptionMetas = metas.filter((meta) => attr(meta, 'name') === 'description');
		const canonicalLinks = elements(document, 'link').filter((link) =>
			(attr(link, 'rel') ?? '').split(/\s+/).includes('canonical'),
		);
		const h1Elements = elements(document, 'h1');
		requireOne(titleElements, 'document title', route);
		requireOne(descriptionMetas, 'meta description', route);
		requireOne(canonicalLinks, 'canonical link', route);
		requireOne(h1Elements, 'h1', route);

		const title = titleElements[0] ? textContent(titleElements[0]).trim() : '';
		const description = descriptionMetas[0] ? attr(descriptionMetas[0], 'content') ?? '' : '';
		const canonical = canonicalLinks[0] ? attr(canonicalLinks[0], 'href') ?? '' : '';
		const expectedCanonical = new URL(route, siteOrigin).href;

		if (!title) failures.push(`${route}: document title is empty`);
		if (!description) failures.push(`${route}: meta description is empty`);
		if (!canonical.startsWith('https://')) failures.push(`${route}: canonical is not absolute HTTPS`);
		if (canonical !== expectedCanonical) {
			failures.push(`${route}: canonical ${canonical || '(missing)'} does not match ${expectedCanonical}`);
		}

		for (const property of ['og:title', 'og:description', 'og:url', 'og:type', 'og:site_name', 'og:image']) {
			requireOne(metas.filter((meta) => attr(meta, 'property') === property), property, route);
		}
		for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
			requireOne(metas.filter((meta) => attr(meta, 'name') === name), name, route);
		}

		const jsonLd = [];
		for (const script of elements(document, 'script').filter(
			(script) => attr(script, 'type') === 'application/ld+json',
		)) {
			try {
				jsonLd.push(JSON.parse(textContent(script)));
			} catch (error) {
				failures.push(`${route}: invalid JSON-LD (${error.message})`);
			}
		}

		if (route === '/' && !hasSchemaType(jsonLd, 'WebSite')) {
			failures.push('/: missing WebSite JSON-LD');
		}
		if (route === '/about/' && (!hasSchemaType(jsonLd, 'ProfilePage') || !hasSchemaType(jsonLd, 'Person'))) {
			failures.push('/about/: missing ProfilePage or Person JSON-LD');
		}
		if (/^\/writing\/[^/]+\/$/.test(route) && !hasSchemaType(jsonLd, 'BlogPosting')) {
			failures.push(`${route}: missing BlogPosting JSON-LD`);
		}

		if (title.length > 65) warnings.push(`${route}: title may truncate (${title.length} characters)`);
		if (description.length < 50 || description.length > 200) {
			warnings.push(`${route}: description is ${description.length} characters`);
		}
		const emptyAltCount = elements(document, 'img').filter((image) => attr(image, 'alt') === '').length;
		if (emptyAltCount > 0) warnings.push(`${route}: ${emptyAltCount} image(s) have empty alt text`);
		if (/^\/writing\/[^/]+\/$/.test(route) && !jsonLd.some((item) => item?.image)) {
			warnings.push(`${route}: article uses the site fallback social image`);
		}

		if (title) {
			const routes = titles.get(title) ?? [];
			routes.push(route);
			titles.set(title, routes);
		}
		if (description) {
			const routes = descriptions.get(description) ?? [];
			routes.push(route);
			descriptions.set(description, routes);
		}
		indexablePages.push({ route, canonical });
	}

	for (const [title, routes] of titles) {
		if (routes.length > 1) warnings.push(`duplicate title on ${routes.join(', ')}: ${title}`);
	}
	for (const [description, routes] of descriptions) {
		if (routes.length > 1) warnings.push(`duplicate description on ${routes.join(', ')}: ${description}`);
	}

	return indexablePages;
}

async function checkDiscovery(indexablePages) {
	const robotsFile = path.join(distDir, 'robots.txt');
	const rssFile = path.join(distDir, 'rss.xml');
	const sitemapIndexFile = path.join(distDir, 'sitemap-index.xml');

	for (const [label, file] of [
		['robots.txt', robotsFile],
		['RSS feed', rssFile],
		['sitemap index', sitemapIndexFile],
	]) {
		if (!(await exists(file))) failures.push(`missing ${label} in dist`);
	}

	if (await exists(robotsFile)) {
		const robots = await readFile(robotsFile, 'utf8');
		if (!robots.includes('Allow: /')) failures.push('robots.txt does not allow crawling');
		if (!robots.includes(`${siteOrigin}/sitemap-index.xml`)) {
			failures.push('robots.txt does not advertise the sitemap index');
		}
		if (/Disallow:\s*\/widgets\//i.test(robots)) {
			failures.push('robots.txt blocks widgets, preventing crawlers from seeing noindex');
		}
	}

	if (await exists(rssFile)) {
		const feed = await readFile(rssFile, 'utf8');
		if (!feed.includes('<rss') || !feed.includes('<item>')) failures.push('RSS feed has no items');
	}

	const sitemapFiles = (await listFiles(distDir)).filter((file) =>
		/sitemap-\d+\.xml$/.test(path.basename(file)),
	);
	if (sitemapFiles.length === 0) failures.push('missing child sitemap');
	const sitemapUrls = new Set();
	for (const file of sitemapFiles) {
		const xml = await readFile(file, 'utf8');
		for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
			sitemapUrls.add(decodeXml(match[1]));
		}
	}

	for (const url of sitemapUrls) {
		if (new URL(url).pathname.startsWith('/widgets/')) {
			failures.push(`widget appears in sitemap: ${url}`);
		}
		if (!(await exists(outputPathForUrl(url)))) {
			failures.push(`sitemap URL has no generated output: ${url}`);
		}
	}
	for (const page of indexablePages) {
		if (!sitemapUrls.has(page.canonical)) failures.push(`${page.route}: missing from sitemap`);
	}
}

async function checkDrafts() {
	for (const collection of ['posts', 'projects']) {
		const directory = path.join(projectRoot, 'src', 'content', collection);
		for (const file of (await listFiles(directory)).filter((entry) => entry.endsWith('.md'))) {
			const source = await readFile(file, 'utf8');
			const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';
			if (!/^draft:\s*true\s*$/m.test(frontmatter)) continue;
			const slug = path.basename(file, '.md');
			const output = path.join(distDir, collection === 'posts' ? 'writing' : 'projects', slug, 'index.html');
			if (await exists(output)) failures.push(`draft route was generated: ${output}`);
		}
	}
}

try {
	const indexablePages = await checkHtml();
	await checkDiscovery(indexablePages);
	await checkDrafts();
} catch (error) {
	failures.push(error.stack ?? error.message);
}

for (const warning of warnings) {
	console.warn(`SEO warning: ${warning}`);
}

if (failures.length > 0) {
	console.error(`\nSEO audit failed with ${failures.length} issue(s):`);
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(`SEO audit passed: ${warnings.length} warning(s), no blocking issues.`);
