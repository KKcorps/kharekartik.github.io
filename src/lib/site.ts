export const SITE = Object.freeze({
	name: 'Kartik Khare',
	origin: 'https://kharekartik.dev',
	defaultTitle: 'Kartik Khare | Distributed systems, databases and AI agents',
	defaultDescription:
		'Practical engineering notes on distributed systems, databases, data infrastructure and AI agents.',
	defaultSocialImage: '/images/social-card.png',
	author: Object.freeze({
		name: 'Kartik Khare',
		path: '/about/',
		sameAs: Object.freeze([
			'https://github.com/KKcorps',
			'https://medium.com/@kharekartik',
		]),
	}),
});

export function absoluteUrl(pathOrUrl: string, origin: string = SITE.origin) {
	return new URL(pathOrUrl, origin).href;
}
