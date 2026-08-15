import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/content';
import { SITE } from '../lib/site';

export const GET: APIRoute = async (context) => {
	const posts = await getPosts();

	return rss({
		title: `${SITE.name} — engineering notes`,
		description: SITE.defaultDescription,
		site: context.site ?? SITE.origin,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.seoDescription ?? post.data.summary,
			pubDate: post.data.publishedOn,
			link: `/writing/${post.id}/`,
		})),
		customData: '<language>en-us</language>',
	});
};
