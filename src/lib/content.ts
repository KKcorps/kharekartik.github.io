import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;
export type ProjectEntry = CollectionEntry<'projects'>;

export async function getPosts() {
	const posts = await getCollection('posts', ({ data }) => !data.draft);

	return posts.sort(
		(a, b) => b.data.publishedOn.getTime() - a.data.publishedOn.getTime(),
	);
}

export async function getProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);

	return projects.sort((a, b) => {
		if (a.data.featured !== b.data.featured) {
			return a.data.featured ? -1 : 1;
		}

		return (b.data.startedOn?.getTime() ?? 0) - (a.data.startedOn?.getTime() ?? 0);
	});
}

export function formatLongDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	}).format(date);
}

export function formatShortDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(date);
}

export function formatSplitDate(date: Date) {
	return {
		monthDay: new Intl.DateTimeFormat('en-US', {
			day: '2-digit',
			month: 'short',
		})
			.format(date)
			.toUpperCase(),
		year: new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
		}).format(date),
	};
}

export function formatMonthYear(date?: Date) {
	if (!date) {
		return 'In progress';
	}

	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: 'numeric',
	}).format(date);
}
