// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://kharekartik.dev',
	base: '/',
	output: 'static',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !page.endsWith('/robots.txt') && !page.endsWith('/rss.xml'),
		}),
	],
});
