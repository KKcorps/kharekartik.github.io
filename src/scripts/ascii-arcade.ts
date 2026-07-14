export {};

type Control = 'up' | 'down' | 'left' | 'right' | 'action' | 'secondary' | 'pause' | 'restart';
type Phase = 'ready' | 'playing' | 'paused' | 'won' | 'lost';
type Direction = { x: number; y: number };

interface EngineHost {
	win(message: string): void;
	lose(message: string): void;
	announce(message: string): void;
}

interface ArcadeGameInstance {
	score: number;
	metaLabel: string;
	metaValue: string;
	reset(): void;
	update(delta: number, input: InputController, host: EngineHost): void;
	draw(renderer: AsciiRenderer): void;
}

interface ArcadeSnapshot {
	slug: string;
	phase: Phase;
	score: number;
	metaLabel: string;
	metaValue: string;
	frame: number;
}

declare global {
	interface Window {
		__asciiArcade?: {
			slug: string;
			start(): void;
			restart(): void;
			press(control: Control): void;
			release(control: Control): void;
			snapshot(): ArcadeSnapshot;
		};
	}
}

const COLS = 30;
const ROWS = 22;
const DIRECTIONS: Record<'up' | 'down' | 'left' | 'right', Direction> = {
	up: { x: 0, y: -1 },
	down: { x: 0, y: 1 },
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
};

const clamp = (value: number, minimum: number, maximum: number) =>
	Math.max(minimum, Math.min(maximum, value));
const wrap = (value: number, maximum: number) => (value + maximum) % maximum;
const keyFor = (x: number, y: number) => `${x},${y}`;
const distance = (a: { x: number; y: number }, b: { x: number; y: number }) =>
	Math.hypot(a.x - b.x, a.y - b.y);
const randomItem = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

class InputController {
	readonly held = new Set<Control>();
	readonly pressed = new Set<Control>();
	private readonly buttons = new Map<Control, HTMLElement[]>();

	constructor() {
		document.querySelectorAll<HTMLElement>('[data-control]').forEach((button) => {
			const control = button.dataset.control as Control | undefined;
			if (!control) return;
			this.buttons.set(control, [...(this.buttons.get(control) ?? []), button]);
		});
	}

	press(control: Control) {
		if (!this.held.has(control)) this.pressed.add(control);
		this.held.add(control);
		this.buttons.get(control)?.forEach((button) => button.classList.add('is-active'));
	}

	release(control: Control) {
		this.held.delete(control);
		this.buttons.get(control)?.forEach((button) => button.classList.remove('is-active'));
	}

	isHeld(control: Control) {
		return this.held.has(control);
	}

	consume(control: Control) {
		if (!this.pressed.has(control)) return false;
		this.pressed.delete(control);
		return true;
	}

	clear() {
		this.held.forEach((control) => this.release(control));
		this.pressed.clear();
	}
}

class AsciiRenderer {
	readonly context: CanvasRenderingContext2D;
	readonly cellWidth: number;
	readonly cellHeight: number;
	accent = '#39ff14';
	text = '#d8e7d2';
	muted = '#526451';
	danger = '#ff5a6f';
	background = '#030604';

	constructor(readonly canvas: HTMLCanvasElement) {
		const context = canvas.getContext('2d');
		if (!context) throw new Error('ASCII arcade requires a 2D canvas context.');
		this.context = context;
		this.cellWidth = canvas.width / COLS;
		this.cellHeight = canvas.height / ROWS;
	}

	refreshPalette() {
		const rootStyle = getComputedStyle(document.documentElement);
		const bodyStyle = getComputedStyle(document.body);
		this.accent = rootStyle.getPropertyValue('--accent').trim() || '#39ff14';
		this.text = bodyStyle.getPropertyValue('--arcade-text').trim() || '#d8e7d2';
		this.muted = bodyStyle.getPropertyValue('--arcade-muted').trim() || '#526451';
		this.background = bodyStyle.getPropertyValue('--arcade-screen').trim() || '#030604';
	}

	clear() {
		this.refreshPalette();
		const { context } = this;
		context.fillStyle = this.background;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		context.strokeStyle = `${this.accent}12`;
		context.lineWidth = 1;
		for (let x = 1; x < COLS; x += 1) {
			context.beginPath();
			context.moveTo(x * this.cellWidth, 0);
			context.lineTo(x * this.cellWidth, this.canvas.height);
			context.stroke();
		}
		for (let y = 1; y < ROWS; y += 1) {
			context.beginPath();
			context.moveTo(0, y * this.cellHeight);
			context.lineTo(this.canvas.width, y * this.cellHeight);
			context.stroke();
		}
	}

	char(x: number, y: number, glyph: string, color = this.accent, scale = 0.72) {
		const { context } = this;
		context.fillStyle = color;
		context.font = `${Math.floor(this.cellHeight * scale)}px "IBM Plex Mono", monospace`;
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(glyph, (x + 0.5) * this.cellWidth, (y + 0.53) * this.cellHeight);
	}

	textLine(x: number, y: number, value: string, color = this.accent, scale = 0.62) {
		[...value].forEach((glyph, index) => {
			if (glyph !== ' ') this.char(x + index, y, glyph, color, scale);
		});
	}

	border(color = this.muted) {
		for (let x = 0; x < COLS; x += 1) {
			this.char(x, 0, '#', color, 0.54);
			this.char(x, ROWS - 1, '#', color, 0.54);
		}
		for (let y = 1; y < ROWS - 1; y += 1) {
			this.char(0, y, '#', color, 0.54);
			this.char(COLS - 1, y, '#', color, 0.54);
		}
	}
}

abstract class BaseGame implements ArcadeGameInstance {
	score = 0;
	metaLabel = 'lives';
	metaValue = '03';
	abstract reset(): void;
	abstract update(delta: number, input: InputController, host: EngineHost): void;
	abstract draw(renderer: AsciiRenderer): void;
}

class PacManGame extends BaseGame {
	private walls = new Set<string>();
	private pellets = new Set<string>();
	private player = { x: 2, y: 2 };
	private ghosts = [
		{ x: 27, y: 19, direction: DIRECTIONS.left },
		{ x: 27, y: 2, direction: DIRECTIONS.down },
	];
	private direction = DIRECTIONS.right;
	private queuedDirection = DIRECTIONS.right;
	private playerTimer = 0;
	private ghostTimer = 0;
	private lives = 3;

	reset() {
		this.score = 0;
		this.lives = 3;
		this.metaLabel = 'lives';
		this.metaValue = '03';
		this.walls.clear();
		this.pellets.clear();
		for (let x = 0; x < COLS; x += 1) {
			this.walls.add(keyFor(x, 0));
			this.walls.add(keyFor(x, ROWS - 1));
		}
		for (let y = 0; y < ROWS; y += 1) {
			this.walls.add(keyFor(0, y));
			this.walls.add(keyFor(COLS - 1, y));
		}
		this.addVerticalWall(7, 2, 18, [5, 11, 17]);
		this.addVerticalWall(14, 3, 19, [7, 14]);
		this.addVerticalWall(22, 2, 18, [5, 11, 17]);
		this.addHorizontalWall(5, 2, 27, [7, 14, 22]);
		this.addHorizontalWall(11, 2, 27, [4, 10, 18, 25]);
		this.addHorizontalWall(17, 2, 27, [7, 14, 22]);
		for (let y = 1; y < ROWS - 1; y += 1) {
			for (let x = 1; x < COLS - 1; x += 1) {
				if (!this.isWall(x, y)) this.pellets.add(keyFor(x, y));
			}
		}
		this.resetPositions();
	}

	private addVerticalWall(x: number, start: number, end: number, gaps: number[]) {
		for (let y = start; y <= end; y += 1) if (!gaps.includes(y)) this.walls.add(keyFor(x, y));
	}

	private addHorizontalWall(y: number, start: number, end: number, gaps: number[]) {
		for (let x = start; x <= end; x += 1) if (!gaps.includes(x)) this.walls.add(keyFor(x, y));
	}

	private isWall(x: number, y: number) {
		return this.walls.has(keyFor(x, y));
	}

	private resetPositions() {
		this.player = { x: 2, y: 2 };
		this.direction = DIRECTIONS.right;
		this.queuedDirection = DIRECTIONS.right;
		this.ghosts = [
			{ x: 27, y: 19, direction: DIRECTIONS.left },
			{ x: 27, y: 2, direction: DIRECTIONS.down },
		];
		this.pellets.delete(keyFor(this.player.x, this.player.y));
	}

	update(delta: number, input: InputController, host: EngineHost) {
		(['up', 'down', 'left', 'right'] as const).forEach((control) => {
			if (input.consume(control)) this.queuedDirection = DIRECTIONS[control];
		});
		this.playerTimer += delta;
		this.ghostTimer += delta;
		if (this.playerTimer >= 0.105) {
			this.playerTimer = 0;
			const queuedX = this.player.x + this.queuedDirection.x;
			const queuedY = this.player.y + this.queuedDirection.y;
			if (!this.isWall(queuedX, queuedY)) this.direction = this.queuedDirection;
			const nextX = this.player.x + this.direction.x;
			const nextY = this.player.y + this.direction.y;
			if (!this.isWall(nextX, nextY)) this.player = { x: nextX, y: nextY };
			const pelletKey = keyFor(this.player.x, this.player.y);
			if (this.pellets.delete(pelletKey)) this.score += 10;
			if (this.pellets.size === 0) host.win('Maze cleared. No dots left behind.');
		}

		if (this.ghostTimer >= 0.17) {
			this.ghostTimer = 0;
			this.ghosts.forEach((ghost) => {
				const reverse = { x: -ghost.direction.x, y: -ghost.direction.y };
				const options = Object.values(DIRECTIONS).filter(
					(direction) =>
						!this.isWall(ghost.x + direction.x, ghost.y + direction.y) &&
						(direction.x !== reverse.x || direction.y !== reverse.y),
				);
				if (options.length > 0) {
					options.sort((a, b) => {
						const aDistance = Math.abs(ghost.x + a.x - this.player.x) + Math.abs(ghost.y + a.y - this.player.y);
						const bDistance = Math.abs(ghost.x + b.x - this.player.x) + Math.abs(ghost.y + b.y - this.player.y);
						return aDistance - bDistance + (Math.random() - 0.5) * 2;
					});
					ghost.direction = options[0];
				}
				ghost.x += ghost.direction.x;
				ghost.y += ghost.direction.y;
			});
		}

		if (this.ghosts.some((ghost) => ghost.x === this.player.x && ghost.y === this.player.y)) {
			this.lives -= 1;
			this.metaValue = String(this.lives).padStart(2, '0');
			if (this.lives <= 0) host.lose('The ghosts found the process.');
			else {
				host.announce(`Route lost. ${this.lives} ${this.lives === 1 ? 'life' : 'lives'} remain.`);
				this.resetPositions();
			}
		}
	}

	draw(renderer: AsciiRenderer) {
		this.walls.forEach((position) => {
			const [x, y] = position.split(',').map(Number);
			renderer.char(x, y, '#', renderer.muted, 0.5);
		});
		this.pellets.forEach((position) => {
			const [x, y] = position.split(',').map(Number);
			renderer.char(x, y, '.', renderer.accent, 0.34);
		});
		renderer.char(this.player.x, this.player.y, 'C', renderer.accent, 0.78);
		this.ghosts.forEach((ghost, index) => renderer.char(ghost.x, ghost.y, index === 0 ? 'G' : 'M', renderer.danger, 0.72));
	}
}

class SpaceInvadersGame extends BaseGame {
	private playerX = 14;
	private enemies: Array<{ x: number; y: number; alive: boolean }> = [];
	private bullets: Array<{ x: number; y: number; enemy: boolean }> = [];
	private formationOffset = 0;
	private formationDirection = 1;
	private formationTimer = 0;
	private fireCooldown = 0;
	private lives = 3;
	private invulnerable = 0;

	reset() {
		this.score = 0;
		this.lives = 3;
		this.metaLabel = 'lives';
		this.metaValue = '03';
		this.playerX = 14;
		this.bullets = [];
		this.formationOffset = 0;
		this.formationDirection = 1;
		this.invulnerable = 0;
		this.enemies = Array.from({ length: 24 }, (_, index) => ({
			x: 3 + (index % 8) * 3,
			y: 2 + Math.floor(index / 8) * 2,
			alive: true,
		}));
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.isHeld('left')) this.playerX -= delta * 15;
		if (input.isHeld('right')) this.playerX += delta * 15;
		this.playerX = clamp(this.playerX, 2, COLS - 3);
		this.fireCooldown = Math.max(0, this.fireCooldown - delta);
		this.invulnerable = Math.max(0, this.invulnerable - delta);
		if (input.consume('action') && this.fireCooldown === 0) {
			this.bullets.push({ x: this.playerX, y: ROWS - 3, enemy: false });
			this.fireCooldown = 0.22;
		}

		this.formationTimer += delta;
		const aliveCount = this.enemies.filter((enemy) => enemy.alive).length;
		if (this.formationTimer >= Math.max(0.11, 0.4 - (24 - aliveCount) * 0.011)) {
			this.formationTimer = 0;
			this.formationOffset += this.formationDirection;
			const living = this.enemies.filter((enemy) => enemy.alive);
			const edgeHit = living.some((enemy) => {
				const x = enemy.x + this.formationOffset;
				return x <= 1 || x >= COLS - 2;
			});
			if (edgeHit) {
				this.formationOffset -= this.formationDirection;
				this.formationDirection *= -1;
				living.forEach((enemy) => (enemy.y += 1));
			}
		}

		if (Math.random() < delta * 0.9 && aliveCount > 0) {
			const shooter = randomItem(this.enemies.filter((enemy) => enemy.alive));
			this.bullets.push({ x: shooter.x + this.formationOffset, y: shooter.y + 1, enemy: true });
		}

		this.bullets.forEach((bullet) => (bullet.y += delta * (bullet.enemy ? 8 : -15)));
		this.bullets = this.bullets.filter((bullet) => {
			if (!bullet.enemy) {
				const hit = this.enemies.find(
					(enemy) =>
						enemy.alive &&
						Math.abs(enemy.x + this.formationOffset - bullet.x) < 1 &&
						Math.abs(enemy.y - bullet.y) < 0.8,
				);
				if (hit) {
					hit.alive = false;
					this.score += 100;
					return false;
				}
			} else if (this.invulnerable === 0 && Math.abs(bullet.x - this.playerX) < 1.5 && bullet.y >= ROWS - 3.4) {
				this.lives -= 1;
				this.invulnerable = 1.2;
				this.metaValue = String(this.lives).padStart(2, '0');
				if (this.lives <= 0) host.lose('The defense line went dark.');
				else host.announce(`Ship hit. ${this.lives} in reserve.`);
				return false;
			}
			return bullet.y > 0 && bullet.y < ROWS - 1;
		});

		if (this.enemies.every((enemy) => !enemy.alive)) host.win('Formation cleared. Sector stable.');
		if (this.enemies.some((enemy) => enemy.alive && enemy.y >= ROWS - 4)) host.lose('The formation reached the terminal.');
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		this.enemies.forEach((enemy, index) => {
			if (enemy.alive) renderer.char(enemy.x + this.formationOffset, enemy.y, index < 8 ? 'W' : 'M', renderer.accent, 0.7);
		});
		this.bullets.forEach((bullet) => renderer.char(bullet.x, bullet.y, bullet.enemy ? '!' : '|', bullet.enemy ? renderer.danger : renderer.text, 0.66));
		if (this.invulnerable === 0 || Math.floor(this.invulnerable * 10) % 2 === 0) {
			renderer.textLine(Math.round(this.playerX) - 1, ROWS - 2, '/A\\', renderer.accent, 0.68);
		}
	}
}

class PongGame extends BaseGame {
	private playerY = 9;
	private cpuY = 9;
	private playerPoints = 0;
	private cpuPoints = 0;
	private ball = { x: 15, y: 11, vx: -10, vy: 5 };

	reset() {
		this.score = 0;
		this.playerPoints = 0;
		this.cpuPoints = 0;
		this.metaLabel = 'cpu';
		this.metaValue = '00';
		this.playerY = 9;
		this.cpuY = 9;
		this.resetBall(-1);
	}

	private resetBall(direction: number) {
		this.ball = {
			x: 15,
			y: 11,
			vx: direction * (9 + Math.random() * 2),
			vy: (Math.random() > 0.5 ? 1 : -1) * (4 + Math.random() * 3),
		};
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.isHeld('up')) this.playerY -= delta * 13;
		if (input.isHeld('down')) this.playerY += delta * 13;
		this.playerY = clamp(this.playerY, 2, ROWS - 5);

		const cpuTarget = this.ball.y - 1;
		this.cpuY += clamp(cpuTarget - this.cpuY, -delta * 9, delta * 9);
		this.cpuY = clamp(this.cpuY, 2, ROWS - 5);

		this.ball.x += this.ball.vx * delta;
		this.ball.y += this.ball.vy * delta;
		if (this.ball.y <= 1.5 || this.ball.y >= ROWS - 2.5) {
			this.ball.y = clamp(this.ball.y, 1.5, ROWS - 2.5);
			this.ball.vy *= -1;
		}

		if (
			this.ball.vx < 0 &&
			this.ball.x <= 2.2 &&
			this.ball.x >= 1.2 &&
			this.ball.y >= this.playerY - 0.5 &&
			this.ball.y <= this.playerY + 3.5
		) {
			this.ball.x = 2.2;
			this.ball.vx = Math.abs(this.ball.vx) * 1.035;
			this.ball.vy += (this.ball.y - (this.playerY + 1.5)) * 2;
		}
		if (
			this.ball.vx > 0 &&
			this.ball.x >= COLS - 3.2 &&
			this.ball.x <= COLS - 2.1 &&
			this.ball.y >= this.cpuY - 0.5 &&
			this.ball.y <= this.cpuY + 3.5
		) {
			this.ball.x = COLS - 3.2;
			this.ball.vx = -Math.abs(this.ball.vx) * 1.035;
			this.ball.vy += (this.ball.y - (this.cpuY + 1.5)) * 1.8;
		}

		if (this.ball.x < 0) {
			this.cpuPoints += 1;
			this.metaValue = String(this.cpuPoints).padStart(2, '0');
			if (this.cpuPoints >= 5) host.lose('The terminal won the rally 5 points to your score.');
			else this.resetBall(1);
		} else if (this.ball.x > COLS) {
			this.playerPoints += 1;
			this.score = this.playerPoints;
			if (this.playerPoints >= 5) host.win('Five points. The terminal has been outplayed.');
			else this.resetBall(-1);
		}
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		for (let y = 2; y < ROWS - 2; y += 2) renderer.char(15, y, ':', renderer.muted, 0.48);
		for (let offset = 0; offset < 4; offset += 1) {
			renderer.char(1, this.playerY + offset, '|', renderer.accent, 0.74);
			renderer.char(COLS - 2, this.cpuY + offset, '|', renderer.danger, 0.74);
		}
		renderer.char(this.ball.x, this.ball.y, 'O', renderer.text, 0.65);
	}
}

const TETROMINOES = [
	[[1, 1, 1, 1]],
	[
		[1, 1],
		[1, 1],
	],
	[
		[0, 1, 0],
		[1, 1, 1],
	],
	[
		[1, 0, 0],
		[1, 1, 1],
	],
	[
		[0, 0, 1],
		[1, 1, 1],
	],
	[
		[0, 1, 1],
		[1, 1, 0],
	],
	[
		[1, 1, 0],
		[0, 1, 1],
	],
];

class TetrisGame extends BaseGame {
	private board: number[][] = [];
	private piece: number[][] = [];
	private pieceX = 3;
	private pieceY = 0;
	private dropTimer = 0;
	private repeatTimer = 0;
	private lines = 0;

	reset() {
		this.score = 0;
		this.lines = 0;
		this.metaLabel = 'lines';
		this.metaValue = '00/10';
		this.board = Array.from({ length: 20 }, () => Array(10).fill(0));
		this.spawnPiece();
	}

	private spawnPiece() {
		this.piece = randomItem(TETROMINOES).map((row) => [...row]);
		this.pieceX = Math.floor((10 - this.piece[0].length) / 2);
		this.pieceY = 0;
	}

	private collides(piece = this.piece, x = this.pieceX, y = this.pieceY) {
		return piece.some((row, rowIndex) =>
			row.some((cell, columnIndex) => {
				if (!cell) return false;
				const boardX = x + columnIndex;
				const boardY = y + rowIndex;
				return boardX < 0 || boardX >= 10 || boardY >= 20 || (boardY >= 0 && this.board[boardY][boardX] !== 0);
			}),
		);
	}

	private move(deltaX: number, deltaY: number) {
		if (this.collides(this.piece, this.pieceX + deltaX, this.pieceY + deltaY)) return false;
		this.pieceX += deltaX;
		this.pieceY += deltaY;
		return true;
	}

	private rotatePiece() {
		const rotated = this.piece[0].map((_, index) => this.piece.map((row) => row[index]).reverse());
		for (const kick of [0, -1, 1, -2, 2]) {
			if (!this.collides(rotated, this.pieceX + kick, this.pieceY)) {
				this.piece = rotated;
				this.pieceX += kick;
				return;
			}
		}
	}

	private lockPiece(host: EngineHost) {
		this.piece.forEach((row, rowIndex) =>
			row.forEach((cell, columnIndex) => {
				if (cell && this.pieceY + rowIndex >= 0) this.board[this.pieceY + rowIndex][this.pieceX + columnIndex] = 1;
			}),
		);
		const before = this.board.length;
		this.board = this.board.filter((row) => row.some((cell) => cell === 0));
		const cleared = before - this.board.length;
		while (this.board.length < 20) this.board.unshift(Array(10).fill(0));
		if (cleared > 0) {
			this.lines += cleared;
			this.score += [0, 100, 300, 500, 800][cleared] ?? cleared * 250;
			this.metaValue = `${String(this.lines).padStart(2, '0')}/10`;
			if (this.lines >= 10) {
				host.win('Ten lines cleared. Stack committed cleanly.');
				return;
			}
		}
		this.spawnPiece();
		if (this.collides()) host.lose('The stack crossed the terminal ceiling.');
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.consume('left')) this.move(-1, 0);
		if (input.consume('right')) this.move(1, 0);
		if (input.consume('down')) {
			if (!this.move(0, 1)) this.lockPiece(host);
			else this.score += 1;
		}
		if (input.consume('action')) this.rotatePiece();
		if (input.consume('secondary')) {
			let dropped = 0;
			while (this.move(0, 1)) dropped += 1;
			this.score += dropped * 2;
			this.lockPiece(host);
			return;
		}

		this.repeatTimer += delta;
		if (this.repeatTimer >= 0.11) {
			this.repeatTimer = 0;
			if (input.isHeld('left')) this.move(-1, 0);
			if (input.isHeld('right')) this.move(1, 0);
			if (input.isHeld('down') && !this.move(0, 1)) this.lockPiece(host);
		}

		this.dropTimer += delta;
		if (this.dropTimer >= Math.max(0.18, 0.62 - this.lines * 0.025)) {
			this.dropTimer = 0;
			if (!this.move(0, 1)) this.lockPiece(host);
		}
	}

	draw(renderer: AsciiRenderer) {
		const originX = 9;
		const originY = 1;
		for (let y = 0; y < 20; y += 1) {
			renderer.char(originX - 1, originY + y, '|', renderer.muted, 0.55);
			renderer.char(originX + 10, originY + y, '|', renderer.muted, 0.55);
			for (let x = 0; x < 10; x += 1) if (this.board[y][x]) renderer.char(originX + x, originY + y, '#', renderer.accent, 0.68);
		}
		this.piece.forEach((row, rowIndex) =>
			row.forEach((cell, columnIndex) => {
				if (cell) renderer.char(originX + this.pieceX + columnIndex, originY + this.pieceY + rowIndex, '#', renderer.text, 0.68);
			}),
		);
		renderer.textLine(originX - 1, ROWS - 1, '============', renderer.muted, 0.52);
	}
}

class SnakeGame extends BaseGame {
	private snake: Array<{ x: number; y: number }> = [];
	private food = { x: 20, y: 10 };
	private direction = DIRECTIONS.right;
	private queuedDirection = DIRECTIONS.right;
	private moveTimer = 0;

	reset() {
		this.score = 0;
		this.metaLabel = 'apples';
		this.metaValue = '00/12';
		this.snake = [
			{ x: 8, y: 11 },
			{ x: 7, y: 11 },
			{ x: 6, y: 11 },
		];
		this.direction = DIRECTIONS.right;
		this.queuedDirection = DIRECTIONS.right;
		this.moveTimer = 0;
		this.placeFood();
	}

	private placeFood() {
		const available: Array<{ x: number; y: number }> = [];
		for (let y = 1; y < ROWS - 1; y += 1) {
			for (let x = 1; x < COLS - 1; x += 1) {
				if (!this.snake.some((segment) => segment.x === x && segment.y === y)) available.push({ x, y });
			}
		}
		this.food = randomItem(available);
	}

	update(delta: number, input: InputController, host: EngineHost) {
		(['up', 'down', 'left', 'right'] as const).forEach((control) => {
			if (!input.consume(control)) return;
			const candidate = DIRECTIONS[control];
			if (candidate.x !== -this.direction.x || candidate.y !== -this.direction.y) this.queuedDirection = candidate;
		});
		this.moveTimer += delta;
		if (this.moveTimer < Math.max(0.065, 0.15 - this.score * 0.004)) return;
		this.moveTimer = 0;
		this.direction = this.queuedDirection;
		const head = this.snake[0];
		const next = { x: head.x + this.direction.x, y: head.y + this.direction.y };
		if (
			next.x <= 0 ||
			next.x >= COLS - 1 ||
			next.y <= 0 ||
			next.y >= ROWS - 1 ||
			this.snake.some((segment) => segment.x === next.x && segment.y === next.y)
		) {
			host.lose('The process collided with its own memory.');
			return;
		}
		this.snake.unshift(next);
		if (next.x === this.food.x && next.y === this.food.y) {
			this.score += 1;
			this.metaValue = `${String(this.score).padStart(2, '0')}/12`;
			if (this.score >= 12) host.win('Twelve apples collected. Process healthy.');
			else this.placeFood();
		} else this.snake.pop();
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		renderer.char(this.food.x, this.food.y, '@', renderer.danger, 0.72);
		this.snake.forEach((segment, index) => renderer.char(segment.x, segment.y, index === 0 ? 'O' : 'o', index === 0 ? renderer.text : renderer.accent, 0.7));
	}
}

class BreakoutGame extends BaseGame {
	private paddleX = 12;
	private paddleWidth = 6;
	private ball = { x: 15, y: 18, vx: 8, vy: -9 };
	private launched = false;
	private bricks: Array<{ x: number; y: number; alive: boolean }> = [];
	private lives = 3;

	reset() {
		this.score = 0;
		this.lives = 3;
		this.metaLabel = 'lives';
		this.metaValue = '03';
		this.paddleX = 12;
		this.bricks = Array.from({ length: 60 }, (_, index) => ({
			x: 3 + (index % 12) * 2,
			y: 2 + Math.floor(index / 12) * 2,
			alive: true,
		}));
		this.parkBall();
	}

	private parkBall() {
		this.launched = false;
		this.ball = { x: this.paddleX + this.paddleWidth / 2, y: ROWS - 4, vx: Math.random() > 0.5 ? 8 : -8, vy: -9 };
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.isHeld('left')) this.paddleX -= delta * 18;
		if (input.isHeld('right')) this.paddleX += delta * 18;
		this.paddleX = clamp(this.paddleX, 1, COLS - this.paddleWidth - 1);
		if (!this.launched) {
			this.ball.x = this.paddleX + this.paddleWidth / 2;
			if (input.consume('action')) {
				this.launched = true;
				host.announce('Packet launched. Clear the wall.');
			}
			return;
		}

		const previous = { ...this.ball };
		this.ball.x += this.ball.vx * delta;
		this.ball.y += this.ball.vy * delta;
		if (this.ball.x <= 1.2 || this.ball.x >= COLS - 1.2) {
			this.ball.x = clamp(this.ball.x, 1.2, COLS - 1.2);
			this.ball.vx *= -1;
		}
		if (this.ball.y <= 1.2) {
			this.ball.y = 1.2;
			this.ball.vy = Math.abs(this.ball.vy);
		}
		if (
			this.ball.vy > 0 &&
			this.ball.y >= ROWS - 3.2 &&
			previous.y < ROWS - 3.2 &&
			this.ball.x >= this.paddleX - 0.5 &&
			this.ball.x <= this.paddleX + this.paddleWidth + 0.5
		) {
			this.ball.y = ROWS - 3.2;
			this.ball.vy = -Math.abs(this.ball.vy) * 1.02;
			this.ball.vx += (this.ball.x - (this.paddleX + this.paddleWidth / 2)) * 1.1;
		}

		const hit = this.bricks.find(
			(brick) => brick.alive && Math.abs(brick.x - this.ball.x) < 1.25 && Math.abs(brick.y - this.ball.y) < 0.75,
		);
		if (hit) {
			hit.alive = false;
			this.score += 50;
			this.ball.vy *= -1;
			if (this.bricks.every((brick) => !brick.alive)) host.win('Every brick cleared. Buffer empty.');
		}

		if (this.ball.y > ROWS) {
			this.lives -= 1;
			this.metaValue = String(this.lives).padStart(2, '0');
			if (this.lives <= 0) host.lose('No packets remain in the buffer.');
			else {
				host.announce(`Packet dropped. ${this.lives} remain.`);
				this.parkBall();
			}
		}
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		this.bricks.forEach((brick) => {
			if (brick.alive) renderer.textLine(brick.x - 1, brick.y, '##', renderer.accent, 0.5);
		});
		renderer.textLine(Math.round(this.paddleX), ROWS - 3, '======', renderer.text, 0.55);
		renderer.char(this.ball.x, this.ball.y, 'O', renderer.danger, 0.62);
	}
}

class TronGame extends BaseGame {
	private player = { x: 4, y: 11, direction: DIRECTIONS.right };
	private cpu = { x: 25, y: 10, direction: DIRECTIONS.left };
	private playerTrail = new Set<string>();
	private cpuTrail = new Set<string>();
	private queuedDirection = DIRECTIONS.right;
	private moveTimer = 0;

	reset() {
		this.score = 0;
		this.metaLabel = 'grid';
		this.metaValue = 'ONLINE';
		this.player = { x: 4, y: 11, direction: DIRECTIONS.right };
		this.cpu = { x: 25, y: 10, direction: DIRECTIONS.left };
		this.queuedDirection = DIRECTIONS.right;
		this.playerTrail = new Set([keyFor(this.player.x, this.player.y)]);
		this.cpuTrail = new Set([keyFor(this.cpu.x, this.cpu.y)]);
		this.moveTimer = 0;
	}

	private occupied(x: number, y: number) {
		return x <= 0 || x >= COLS - 1 || y <= 0 || y >= ROWS - 1 || this.playerTrail.has(keyFor(x, y)) || this.cpuTrail.has(keyFor(x, y));
	}

	private chooseCpuDirection() {
		const reverse = { x: -this.cpu.direction.x, y: -this.cpu.direction.y };
		const candidates = Object.values(DIRECTIONS).filter(
			(direction) =>
				(direction.x !== reverse.x || direction.y !== reverse.y) &&
				!this.occupied(this.cpu.x + direction.x, this.cpu.y + direction.y),
		);
		if (candidates.length === 0) return this.cpu.direction;
		const lookAhead = (direction: Direction) => {
			let open = 0;
			for (let step = 1; step <= 5; step += 1) {
				if (this.occupied(this.cpu.x + direction.x * step, this.cpu.y + direction.y * step)) break;
				open += 1;
			}
			return open + Math.random() * 2;
		};
		return candidates.sort((a, b) => lookAhead(b) - lookAhead(a))[0];
	}

	update(delta: number, input: InputController, host: EngineHost) {
		(['up', 'down', 'left', 'right'] as const).forEach((control) => {
			if (!input.consume(control)) return;
			const candidate = DIRECTIONS[control];
			if (candidate.x !== -this.player.direction.x || candidate.y !== -this.player.direction.y) this.queuedDirection = candidate;
		});
		this.moveTimer += delta;
		if (this.moveTimer < 0.105) return;
		this.moveTimer = 0;
		this.player.direction = this.queuedDirection;
		if (Math.random() < 0.28 || this.occupied(this.cpu.x + this.cpu.direction.x, this.cpu.y + this.cpu.direction.y)) {
			this.cpu.direction = this.chooseCpuDirection();
		}
		const playerNext = { x: this.player.x + this.player.direction.x, y: this.player.y + this.player.direction.y };
		const cpuNext = { x: this.cpu.x + this.cpu.direction.x, y: this.cpu.y + this.cpu.direction.y };
		const playerCrash = this.occupied(playerNext.x, playerNext.y) || (playerNext.x === cpuNext.x && playerNext.y === cpuNext.y);
		const cpuCrash = this.occupied(cpuNext.x, cpuNext.y) || (playerNext.x === cpuNext.x && playerNext.y === cpuNext.y);
		if (playerCrash) {
			host.lose(cpuCrash ? 'Both routes collided. The grid wins.' : 'Blue cycle hit an occupied route.');
			return;
		}
		if (cpuCrash) {
			this.score += 1000;
			host.win('Red cycle trapped. Blue route survives.');
			return;
		}
		this.player = { ...playerNext, direction: this.player.direction };
		this.cpu = { ...cpuNext, direction: this.cpu.direction };
		this.playerTrail.add(keyFor(this.player.x, this.player.y));
		this.cpuTrail.add(keyFor(this.cpu.x, this.cpu.y));
		this.score += 1;
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		this.playerTrail.forEach((position) => {
			const [x, y] = position.split(',').map(Number);
			renderer.char(x, y, '=', renderer.accent, 0.48);
		});
		this.cpuTrail.forEach((position) => {
			const [x, y] = position.split(',').map(Number);
			renderer.char(x, y, '-', renderer.danger, 0.48);
		});
		renderer.char(this.player.x, this.player.y, 'B', renderer.text, 0.72);
		renderer.char(this.cpu.x, this.cpu.y, 'R', renderer.danger, 0.72);
	}
}

class MissileCommandGame extends BaseGame {
	private crosshair = { x: 15, y: 10 };
	private cities: Array<{ x: number; alive: boolean }> = [];
	private missiles: Array<{ startX: number; targetX: number; progress: number }> = [];
	private explosions: Array<{ x: number; y: number; radius: number; growing: boolean }> = [];
	private spawnTimer = 0;
	private missilesRemaining = 24;

	reset() {
		this.score = 0;
		this.metaLabel = 'cities';
		this.metaValue = '05';
		this.crosshair = { x: 15, y: 10 };
		this.cities = [4, 9, 15, 21, 26].map((x) => ({ x, alive: true }));
		this.missiles = [];
		this.explosions = [];
		this.spawnTimer = 0;
		this.missilesRemaining = 24;
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.isHeld('left')) this.crosshair.x -= delta * 13;
		if (input.isHeld('right')) this.crosshair.x += delta * 13;
		if (input.isHeld('up')) this.crosshair.y -= delta * 10;
		if (input.isHeld('down')) this.crosshair.y += delta * 10;
		this.crosshair.x = clamp(this.crosshair.x, 1, COLS - 2);
		this.crosshair.y = clamp(this.crosshair.y, 2, ROWS - 5);
		if (input.consume('action')) {
			this.explosions.push({ x: this.crosshair.x, y: this.crosshair.y, radius: 0.2, growing: true });
		}

		this.spawnTimer += delta;
		if (this.missilesRemaining > 0 && this.spawnTimer >= 0.58) {
			this.spawnTimer = 0;
			this.missilesRemaining -= 1;
			const targets = this.cities.filter((city) => city.alive);
			if (targets.length > 0) {
				const target = randomItem(targets);
				this.missiles.push({ startX: 1 + Math.random() * (COLS - 3), targetX: target.x, progress: 0 });
			}
		}

		this.explosions.forEach((explosion) => {
			explosion.radius += delta * (explosion.growing ? 7 : -6);
			if (explosion.radius >= 3.2) explosion.growing = false;
		});
		this.explosions = this.explosions.filter((explosion) => explosion.radius > 0);
		this.missiles.forEach((missile) => (missile.progress += delta * 0.11));
		this.missiles = this.missiles.filter((missile) => {
			const position = {
				x: missile.startX + (missile.targetX - missile.startX) * missile.progress,
				y: 1 + (ROWS - 4) * missile.progress,
			};
			if (this.explosions.some((explosion) => distance(position, explosion) <= explosion.radius)) {
				this.score += 100;
				return false;
			}
			if (missile.progress >= 1) {
				const city = this.cities.find((candidate) => candidate.alive && Math.abs(candidate.x - missile.targetX) < 1);
				if (city) city.alive = false;
				const alive = this.cities.filter((candidate) => candidate.alive).length;
				this.metaValue = String(alive).padStart(2, '0');
				if (alive === 0) host.lose('All city nodes are offline.');
				else host.announce(`Impact detected. ${alive} city nodes remain.`);
				return false;
			}
			return true;
		});

		if (this.missilesRemaining === 0 && this.missiles.length === 0) host.win('Incoming queue drained. Cities remain online.');
	}

	draw(renderer: AsciiRenderer) {
		renderer.border();
		this.cities.forEach((city) => renderer.textLine(city.x - 1, ROWS - 3, city.alive ? '/^\\' : 'xxx', city.alive ? renderer.accent : renderer.muted, 0.52));
		this.missiles.forEach((missile) => {
			const x = missile.startX + (missile.targetX - missile.startX) * missile.progress;
			const y = 1 + (ROWS - 4) * missile.progress;
			renderer.char(x, y, '!', renderer.danger, 0.62);
		});
		this.explosions.forEach((explosion) => {
			for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
				renderer.char(explosion.x + Math.cos(angle) * explosion.radius, explosion.y + Math.sin(angle) * explosion.radius, '*', renderer.text, 0.5);
			}
		});
		renderer.char(this.crosshair.x, this.crosshair.y, '+', renderer.accent, 0.7);
	}
}

interface MovingObject {
	x: number;
	y: number;
	vx: number;
	vy: number;
}

interface Asteroid extends MovingObject {
	size: number;
}

class AsteroidsGame extends BaseGame {
	private ship = { x: 15, y: 11, vx: 0, vy: 0, angle: -Math.PI / 2 };
	private bullets: Array<MovingObject & { life: number }> = [];
	private asteroids: Asteroid[] = [];
	private lives = 3;
	private invulnerable = 0;
	private fireCooldown = 0;

	reset() {
		this.score = 0;
		this.lives = 3;
		this.metaLabel = 'ships';
		this.metaValue = '03';
		this.ship = { x: 15, y: 11, vx: 0, vy: 0, angle: -Math.PI / 2 };
		this.bullets = [];
		this.invulnerable = 1.5;
		this.asteroids = Array.from({ length: 5 }, (_, index) => {
			const angle = (Math.PI * 2 * index) / 5 + 0.4;
			return {
				x: 15 + Math.cos(angle) * 10,
				y: 11 + Math.sin(angle) * 7,
				vx: Math.cos(angle + 1.7) * (1.2 + Math.random()),
				vy: Math.sin(angle + 1.7) * (1.2 + Math.random()),
				size: 2,
			};
		});
	}

	private wrapObject<T extends MovingObject>(object: T) {
		object.x = wrap(object.x, COLS);
		object.y = wrap(object.y, ROWS);
	}

	private resetShip() {
		this.ship = { x: 15, y: 11, vx: 0, vy: 0, angle: -Math.PI / 2 };
		this.invulnerable = 1.6;
	}

	update(delta: number, input: InputController, host: EngineHost) {
		if (input.isHeld('left')) this.ship.angle -= delta * 3.4;
		if (input.isHeld('right')) this.ship.angle += delta * 3.4;
		if (input.isHeld('up')) {
			this.ship.vx += Math.cos(this.ship.angle) * delta * 7;
			this.ship.vy += Math.sin(this.ship.angle) * delta * 7;
		}
		this.ship.vx *= 0.994;
		this.ship.vy *= 0.994;
		this.ship.x += this.ship.vx * delta;
		this.ship.y += this.ship.vy * delta;
		this.wrapObject(this.ship);
		this.invulnerable = Math.max(0, this.invulnerable - delta);
		this.fireCooldown = Math.max(0, this.fireCooldown - delta);
		if (input.consume('action') && this.fireCooldown === 0) {
			this.bullets.push({
				x: this.ship.x + Math.cos(this.ship.angle),
				y: this.ship.y + Math.sin(this.ship.angle),
				vx: this.ship.vx + Math.cos(this.ship.angle) * 16,
				vy: this.ship.vy + Math.sin(this.ship.angle) * 16,
				life: 1.15,
			});
			this.fireCooldown = 0.16;
		}

		this.bullets.forEach((bullet) => {
			bullet.x += bullet.vx * delta;
			bullet.y += bullet.vy * delta;
			bullet.life -= delta;
			this.wrapObject(bullet);
		});
		this.asteroids.forEach((asteroid) => {
			asteroid.x += asteroid.vx * delta;
			asteroid.y += asteroid.vy * delta;
			this.wrapObject(asteroid);
		});

		const spawned: Asteroid[] = [];
		const destroyed = new Set<Asteroid>();
		this.bullets = this.bullets.filter((bullet) => {
			if (bullet.life <= 0) return false;
			const hit = this.asteroids.find((asteroid) => !destroyed.has(asteroid) && distance(bullet, asteroid) < asteroid.size + 0.25);
			if (!hit) return true;
			destroyed.add(hit);
			this.score += hit.size === 2 ? 100 : 200;
			if (hit.size > 1) {
				for (const direction of [-1, 1]) {
					spawned.push({ x: hit.x, y: hit.y, vx: hit.vx + direction * 2.3, vy: hit.vy - direction * 1.7, size: 1 });
				}
			}
			return false;
		});
		this.asteroids = [...this.asteroids.filter((asteroid) => !destroyed.has(asteroid)), ...spawned];

		if (this.invulnerable === 0 && this.asteroids.some((asteroid) => distance(this.ship, asteroid) < asteroid.size + 0.55)) {
			this.lives -= 1;
			this.metaValue = String(this.lives).padStart(2, '0');
			if (this.lives <= 0) host.lose('The final ship fragmented in the field.');
			else {
				host.announce(`Hull lost. ${this.lives} ships remain.`);
				this.resetShip();
			}
		}
		if (this.asteroids.length === 0) host.win('Field cleared. Navigation restored.');
	}

	draw(renderer: AsciiRenderer) {
		this.asteroids.forEach((asteroid) => renderer.char(asteroid.x, asteroid.y, asteroid.size > 1 ? 'O' : 'o', renderer.accent, asteroid.size > 1 ? 0.9 : 0.6));
		this.bullets.forEach((bullet) => renderer.char(bullet.x, bullet.y, '.', renderer.text, 0.38));
		if (this.invulnerable === 0 || Math.floor(this.invulnerable * 10) % 2 === 0) {
			const normalized = wrap(this.ship.angle + Math.PI / 4, Math.PI * 2);
			const glyphs = ['>', 'v', '<', '^'];
			const glyph = glyphs[Math.floor(normalized / (Math.PI / 2)) % 4];
			renderer.char(this.ship.x, this.ship.y, glyph, renderer.text, 0.86);
		}
	}
}

interface GalagaEnemy {
	baseX: number;
	baseY: number;
	alive: boolean;
	dive: number | null;
}

class GalagaGame extends BaseGame {
	private playerX = 15;
	private enemies: GalagaEnemy[] = [];
	private playerBullets: MovingObject[] = [];
	private enemyBullets: MovingObject[] = [];
	private formationTime = 0;
	private fireCooldown = 0;
	private lives = 3;
	private invulnerable = 0;

	reset() {
		this.score = 0;
		this.lives = 3;
		this.metaLabel = 'lives';
		this.metaValue = '03';
		this.playerX = 15;
		this.formationTime = 0;
		this.playerBullets = [];
		this.enemyBullets = [];
		this.invulnerable = 0;
		this.enemies = Array.from({ length: 28 }, (_, index) => ({
			baseX: 4 + (index % 7) * 3.5,
			baseY: 2 + Math.floor(index / 7) * 2,
			alive: true,
			dive: null,
		}));
	}

	private enemyPosition(enemy: GalagaEnemy) {
		const offset = Math.sin(this.formationTime * 0.9) * 1.6;
		if (enemy.dive === null) return { x: enemy.baseX + offset, y: enemy.baseY };
		return {
			x: enemy.baseX + offset + Math.sin(enemy.dive * 2.5) * 8,
			y: enemy.baseY + enemy.dive * 5,
		};
	}

	update(delta: number, input: InputController, host: EngineHost) {
		this.formationTime += delta;
		if (input.isHeld('left')) this.playerX -= delta * 17;
		if (input.isHeld('right')) this.playerX += delta * 17;
		this.playerX = clamp(this.playerX, 2, COLS - 3);
		this.fireCooldown = Math.max(0, this.fireCooldown - delta);
		this.invulnerable = Math.max(0, this.invulnerable - delta);
		if (input.consume('action') && this.fireCooldown === 0) {
			this.playerBullets.push({ x: this.playerX, y: ROWS - 3, vx: 0, vy: -16 });
			this.fireCooldown = 0.16;
		}

		const living = this.enemies.filter((enemy) => enemy.alive);
		if (living.length > 0 && !living.some((enemy) => enemy.dive !== null) && Math.random() < delta * 0.55) randomItem(living).dive = 0;
		living.forEach((enemy) => {
			if (enemy.dive !== null) {
				enemy.dive += delta;
				if (enemy.dive > 4.2) enemy.dive = null;
			}
		});
		if (living.length > 0 && Math.random() < delta * 1.05) {
			const shooter = randomItem(living);
			const position = this.enemyPosition(shooter);
			this.enemyBullets.push({ x: position.x, y: position.y + 1, vx: 0, vy: 8.5 });
		}

		this.playerBullets.forEach((bullet) => {
			bullet.x += bullet.vx * delta;
			bullet.y += bullet.vy * delta;
		});
		this.enemyBullets.forEach((bullet) => {
			bullet.x += bullet.vx * delta;
			bullet.y += bullet.vy * delta;
		});
		this.playerBullets = this.playerBullets.filter((bullet) => {
			const hit = this.enemies.find((enemy) => enemy.alive && distance(bullet, this.enemyPosition(enemy)) < 0.9);
			if (hit) {
				hit.alive = false;
				this.score += hit.dive === null ? 100 : 200;
				return false;
			}
			return bullet.y > 0;
		});
		this.enemyBullets = this.enemyBullets.filter((bullet) => {
			if (this.invulnerable === 0 && Math.abs(bullet.x - this.playerX) < 1.3 && bullet.y >= ROWS - 3.5) {
				this.lives -= 1;
				this.invulnerable = 1.2;
				this.metaValue = String(this.lives).padStart(2, '0');
				if (this.lives <= 0) host.lose('The final fighter is offline.');
				else host.announce(`Fighter hit. ${this.lives} remain.`);
				return false;
			}
			return bullet.y < ROWS;
		});

		const divingCollision = this.enemies.find((enemy) => {
			if (!enemy.alive || enemy.dive === null) return false;
			const position = this.enemyPosition(enemy);
			return this.invulnerable === 0 && Math.abs(position.x - this.playerX) < 1.4 && position.y >= ROWS - 3.5;
		});
		if (divingCollision) {
			divingCollision.alive = false;
			this.lives -= 1;
			this.invulnerable = 1.2;
			this.metaValue = String(this.lives).padStart(2, '0');
			if (this.lives <= 0) host.lose('A diving enemy reached the final fighter.');
			else host.announce(`Dive collision. ${this.lives} fighters remain.`);
		}
		if (this.enemies.every((enemy) => !enemy.alive)) host.win('Formation cleared. Flight path open.');
	}

	draw(renderer: AsciiRenderer) {
		this.enemies.forEach((enemy, index) => {
			if (!enemy.alive) return;
			const position = this.enemyPosition(enemy);
			renderer.char(position.x, position.y, enemy.dive === null ? (index < 7 ? 'W' : 'M') : 'V', enemy.dive === null ? renderer.accent : renderer.danger, 0.68);
		});
		this.playerBullets.forEach((bullet) => renderer.char(bullet.x, bullet.y, '|', renderer.text, 0.58));
		this.enemyBullets.forEach((bullet) => renderer.char(bullet.x, bullet.y, '!', renderer.danger, 0.58));
		if (this.invulnerable === 0 || Math.floor(this.invulnerable * 10) % 2 === 0) {
			renderer.textLine(Math.round(this.playerX) - 1, ROWS - 2, '/A\\', renderer.accent, 0.68);
		}
	}
}

const GAME_FACTORIES: Record<string, () => ArcadeGameInstance> = {
	'pac-man': () => new PacManGame(),
	'space-invaders': () => new SpaceInvadersGame(),
	pong: () => new PongGame(),
	tetris: () => new TetrisGame(),
	snake: () => new SnakeGame(),
	breakout: () => new BreakoutGame(),
	tron: () => new TronGame(),
	'missile-command': () => new MissileCommandGame(),
	asteroids: () => new AsteroidsGame(),
	galaga: () => new GalagaGame(),
};

class ArcadeEngine implements EngineHost {
	private phase: Phase = 'ready';
	private frame = 0;
	private previousTime = 0;
	private readonly renderer: AsciiRenderer;
	private readonly input = new InputController();

	constructor(
		private readonly slug: string,
		private readonly game: ArcadeGameInstance,
		private readonly elements: {
			canvas: HTMLCanvasElement;
			score: HTMLElement;
			state: HTMLElement;
			metaLabel: HTMLElement;
			meta: HTMLElement;
			announcer: HTMLElement;
			overlay: HTMLElement;
			overlayEyebrow: HTMLElement;
			overlayTitle: HTMLElement;
			overlayCopy: HTMLElement;
			start: HTMLButtonElement;
		},
	) {
		this.renderer = new AsciiRenderer(elements.canvas);
		this.game.reset();
		this.bindControls();
		this.draw();
		this.updateHud();
		requestAnimationFrame((time) => this.loop(time));
	}

	start() {
		if (this.phase === 'won' || this.phase === 'lost') this.game.reset();
		this.phase = 'playing';
		this.previousTime = performance.now();
		this.elements.overlay.classList.add('is-hidden');
		this.elements.state.textContent = 'PLAYING';
		this.elements.canvas.focus({ preventScroll: true });
		this.announce('Game live. Inputs accepted.');
		this.emitState();
	}

	restart() {
		this.input.clear();
		this.game.reset();
		this.phase = 'playing';
		this.previousTime = performance.now();
		this.elements.overlay.classList.add('is-hidden');
		this.announce('Fresh process started.');
		this.updateHud();
		this.emitState();
	}

	win(message: string) {
		if (this.phase !== 'playing') return;
		this.phase = 'won';
		this.showOverlay('RUN COMPLETE', 'YOU WIN', message, '[ ENTER ] PLAY AGAIN');
		this.emitState();
	}

	lose(message: string) {
		if (this.phase !== 'playing') return;
		this.phase = 'lost';
		this.showOverlay('PROCESS ENDED', 'GAME OVER', message, '[ ENTER ] RETRY');
		this.emitState();
	}

	announce(message: string) {
		this.elements.announcer.textContent = message;
	}

	press(control: Control) {
		if (control === 'restart') {
			this.restart();
			return;
		}
		if (control === 'pause') {
			this.togglePause();
			return;
		}
		if (this.phase === 'ready' || this.phase === 'won' || this.phase === 'lost') this.start();
		this.input.press(control);
	}

	release(control: Control) {
		this.input.release(control);
	}

	snapshot(): ArcadeSnapshot {
		return {
			slug: this.slug,
			phase: this.phase,
			score: this.game.score,
			metaLabel: this.game.metaLabel,
			metaValue: this.game.metaValue,
			frame: this.frame,
		};
	}

	private bindControls() {
		this.elements.start.addEventListener('click', () => this.start());
		const keyMap: Record<string, Control> = {
			arrowup: 'up',
			w: 'up',
			arrowdown: 'down',
			s: 'down',
			arrowleft: 'left',
			a: 'left',
			arrowright: 'right',
			d: 'right',
			' ': 'action',
			x: 'action',
			shift: 'secondary',
			z: 'secondary',
			p: 'pause',
			escape: 'pause',
			r: 'restart',
		};
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Enter' && this.phase !== 'playing') {
				event.preventDefault();
				this.start();
				return;
			}
			const control = keyMap[event.key.toLowerCase()];
			if (!control) return;
			event.preventDefault();
			this.press(control);
		});
		document.addEventListener('keyup', (event) => {
			const control = keyMap[event.key.toLowerCase()];
			if (control) this.release(control);
		});

		document.querySelectorAll<HTMLButtonElement>('[data-control]').forEach((button) => {
			const control = button.dataset.control as Control | undefined;
			if (!control || button.disabled) return;
			button.addEventListener('pointerdown', (event) => {
				event.preventDefault();
				try {
					button.setPointerCapture?.(event.pointerId);
				} catch {
					// Synthetic accessibility tests do not own an active pointer.
				}
				this.press(control);
			});
			button.addEventListener('click', (event) => {
				if (event.detail !== 0) return;
				this.press(control);
				requestAnimationFrame(() => this.release(control));
			});
			for (const eventName of ['pointerup', 'pointercancel', 'lostpointercapture'] as const) {
				button.addEventListener(eventName, () => this.release(control));
			}
		});
		window.addEventListener('blur', () => this.input.clear());
		document.addEventListener('visibilitychange', () => {
			if (document.hidden && this.phase === 'playing') this.togglePause();
		});
	}

	private togglePause() {
		if (this.phase === 'playing') {
			this.phase = 'paused';
			this.input.clear();
			this.showOverlay('PROCESS PAUSED', 'PAUSED', 'The game state is safe. Continue when ready.', '[ ENTER ] CONTINUE');
			this.emitState();
		} else if (this.phase === 'paused') this.start();
	}

	private showOverlay(eyebrow: string, title: string, copy: string, button: string) {
		this.elements.overlayEyebrow.textContent = eyebrow;
		this.elements.overlayTitle.textContent = title;
		this.elements.overlayCopy.textContent = copy;
		this.elements.start.textContent = button;
		this.elements.overlay.classList.remove('is-hidden');
		this.elements.state.textContent = this.phase.toUpperCase();
		this.elements.start.focus({ preventScroll: true });
	}

	private loop(time: number) {
		const delta = this.previousTime === 0 ? 0 : Math.min(0.05, Math.max(0, (time - this.previousTime) / 1000));
		this.previousTime = time;
		if (this.phase === 'playing') this.game.update(delta, this.input, this);
		this.draw();
		this.updateHud();
		this.frame += 1;
		requestAnimationFrame((nextTime) => this.loop(nextTime));
	}

	private draw() {
		this.renderer.clear();
		this.game.draw(this.renderer);
	}

	private updateHud() {
		this.elements.score.textContent = String(this.game.score).padStart(5, '0');
		this.elements.metaLabel.textContent = this.game.metaLabel;
		this.elements.meta.textContent = this.game.metaValue;
		if (this.phase === 'playing') this.elements.state.textContent = 'PLAYING';
	}

	private emitState() {
		window.dispatchEvent(new CustomEvent('arcade:statechange', { detail: this.snapshot() }));
	}
}

const shell = document.querySelector<HTMLElement>('[data-arcade-game]');
const canvas = document.getElementById('arcade-canvas');
const score = document.getElementById('arcade-score');
const state = document.getElementById('arcade-state');
const metaLabel = document.getElementById('arcade-meta-label');
const meta = document.getElementById('arcade-meta');
const announcer = document.getElementById('arcade-announcer');
const overlay = document.getElementById('arcade-overlay');
const overlayEyebrow = document.getElementById('arcade-overlay-eyebrow');
const overlayTitle = document.getElementById('arcade-overlay-title');
const overlayCopy = document.getElementById('arcade-overlay-copy');
const start = document.getElementById('arcade-start');

if (
	shell instanceof HTMLElement &&
	canvas instanceof HTMLCanvasElement &&
	score instanceof HTMLElement &&
	state instanceof HTMLElement &&
	metaLabel instanceof HTMLElement &&
	meta instanceof HTMLElement &&
	announcer instanceof HTMLElement &&
	overlay instanceof HTMLElement &&
	overlayEyebrow instanceof HTMLElement &&
	overlayTitle instanceof HTMLElement &&
	overlayCopy instanceof HTMLElement &&
	start instanceof HTMLButtonElement
) {
	const slug = shell.dataset.arcadeGame ?? '';
	const factory = GAME_FACTORIES[slug];
	if (!factory) throw new Error(`Unknown ASCII arcade game: ${slug}`);
	const engine = new ArcadeEngine(slug, factory(), {
		canvas,
		score,
		state,
		metaLabel,
		meta,
		announcer,
		overlay,
		overlayEyebrow,
		overlayTitle,
		overlayCopy,
		start,
	});
	window.__asciiArcade = {
		slug,
		start: () => engine.start(),
		restart: () => engine.restart(),
		press: (control) => engine.press(control),
		release: (control) => engine.release(control),
		snapshot: () => engine.snapshot(),
	};
}
