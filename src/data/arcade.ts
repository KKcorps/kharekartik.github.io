export interface ArcadeGame {
	slug: string;
	title: string;
	command: string;
	description: string;
	objective: string;
	directions: Array<'up' | 'down' | 'left' | 'right'>;
	primary?: string;
	secondary?: string;
}

export const arcadeGames: ArcadeGame[] = [
	{
		slug: 'pac-man',
		title: 'Pac-Man',
		command: './pac-man',
		description: 'Clear the maze before the ghosts close the route.',
		objective: 'Collect every dot. Arrow keys or the pad change direction.',
		directions: ['up', 'down', 'left', 'right'],
	},
	{
		slug: 'space-invaders',
		title: 'Space Invaders',
		command: './space-invaders',
		description: 'Hold the line against a descending formation.',
		objective: 'Move left or right and fire before the invaders land.',
		directions: ['left', 'right'],
		primary: 'fire',
	},
	{
		slug: 'pong',
		title: 'Pong',
		command: './pong',
		description: 'A first-to-five rally against the terminal.',
		objective: 'Move your left paddle. First side to five points wins.',
		directions: ['up', 'down'],
	},
	{
		slug: 'tetris',
		title: 'Tetris',
		command: './tetris',
		description: 'Stack cleanly and keep the terminal from overflowing.',
		objective: 'Clear ten lines. Rotate with Space and hard drop with Shift.',
		directions: ['down', 'left', 'right'],
		primary: 'rotate',
		secondary: 'drop',
	},
	{
		slug: 'snake',
		title: 'Snake',
		command: './snake',
		description: 'Grow the process without eating your own tail.',
		objective: 'Collect twelve apples. Do not hit the border or yourself.',
		directions: ['up', 'down', 'left', 'right'],
	},
	{
		slug: 'breakout',
		title: 'Breakout',
		command: './breakout',
		description: 'Bounce one stubborn packet through every brick.',
		objective: 'Move the paddle, launch with Space and clear the wall.',
		directions: ['left', 'right'],
		primary: 'launch',
	},
	{
		slug: 'tron',
		title: 'Tron',
		command: './tron',
		description: 'Outroute a hostile process on an occupied grid.',
		objective: 'Turn before a wall or trail. Make the red cycle crash first.',
		directions: ['up', 'down', 'left', 'right'],
	},
	{
		slug: 'missile-command',
		title: 'Missile Command',
		command: './missile-command',
		description: 'Intercept the incoming requests before they reach the city.',
		objective: 'Move the crosshair and detonate with Space. Keep one city alive.',
		directions: ['up', 'down', 'left', 'right'],
		primary: 'detonate',
	},
	{
		slug: 'asteroids',
		title: 'Asteroids',
		command: './asteroids',
		description: 'Clear a noisy field with three ships and no brakes.',
		objective: 'Rotate, thrust and fire. Large rocks split when hit.',
		directions: ['up', 'left', 'right'],
		primary: 'fire',
	},
	{
		slug: 'galaga',
		title: 'Galaga',
		command: './galaga',
		description: 'Break the formation while enemies dive through your lane.',
		objective: 'Move left or right, fire and clear the full formation.',
		directions: ['left', 'right'],
		primary: 'fire',
	},
];

export const arcadeGameBySlug = new Map(arcadeGames.map((game) => [game.slug, game]));
