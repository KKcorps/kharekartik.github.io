import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';

const endpoint = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kharekartik';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../src/content/posts');

const turndown = new TurndownService({
	headingStyle: 'atx',
	codeBlockStyle: 'fenced',
	bulletListMarker: '-',
	emDelimiter: '_',
});

turndown.addRule('figure', {
	filter: 'figure',
	replacement(content) {
		return `\n${content}\n`;
	},
});

turndown.addRule('figcaption', {
	filter: 'figcaption',
	replacement(content) {
		return content ? `\n_${content}_\n` : '\n';
	},
});

turndown.addRule('iframe', {
	filter: 'iframe',
	replacement() {
		return '\n';
	},
});

turndown.addRule('mediumButtons', {
	filter(node) {
		return node.nodeName === 'A' && node.getAttribute('class')?.includes('markup--anchor-button');
	},
	replacement(content, node) {
		const href = node.getAttribute('href');
		return href ? `[${content || 'Link'}](${href})` : content;
	},
});

const slugify = (value) =>
	value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 80);

const toPlainText = (html) =>
	turndown
		.turndown(html)
		.replace(/!\[[^\]]*\]\([^)]+\)/g, '')
		.replace(/\[[^\]]+\]\([^)]+\)/g, (match) => match.replace(/\[|\]\([^)]+\)/g, ''))
		.replace(/\s+/g, ' ')
		.trim();

const frontmatterSafe = (value) => value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const pickSummary = (item) => {
	const source = item.description || item.content || '';
	const subtitleMatch = source.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);

	if (subtitleMatch) {
		return toPlainText(subtitleMatch[1]);
	}

	const paragraphMatch = source.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
	return paragraphMatch ? toPlainText(paragraphMatch[1]) : item.title;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const cleanupMarkdown = (markdown, summary, title) =>
	markdown
		.replace(new RegExp(`^####\\s+${escapeRegExp(summary)}\\s*`, 'i'), '')
		.replace(/\n-{3,}\n[\s\S]*?was originally published[\s\S]*$/i, '')
		.replace(new RegExp(`\\[${escapeRegExp(title)}\\]\\([^)]*\\) was originally published[\\s\\S]*$`, 'i'), '')
		.replace(/\n!\[\]\(https:\/\/medium\.com\/_\/stat[^)]+\)\s*/gi, '\n')
		.replace(/\n\* \* \*\s*$/g, '\n')
		.replace(/\n{3,}/g, '\n\n')
		.replace(/^\s+|\s+$/g, '')
		.replace(/\n_Originally published on Medium\._/g, '');

const response = await fetch(endpoint);

if (!response.ok) {
	throw new Error(`Failed to fetch Medium feed: ${response.status}`);
}

const data = await response.json();

if (data.status !== 'ok' || !Array.isArray(data.items)) {
	throw new Error('Medium feed response did not contain items.');
}

await mkdir(outputDir, { recursive: true });

for (const [index, item] of data.items.entries()) {
	const slug = slugify(item.title);
	const summary = pickSummary(item);
	const markdownBody = cleanupMarkdown(
		turndown.turndown(item.content || item.description || ''),
		summary,
		item.title,
	);
	const publishedOn = item.pubDate.slice(0, 10);
	const tags =
		item.categories?.length > 0
			? item.categories.map((category) => `  - ${category}`)
			: ['  - imported'];
	const importedNote = `> Originally published on Medium: [${item.title}](${item.link})\n`;
	const fileContents = `---\n` +
		`title: "${frontmatterSafe(item.title)}"\n` +
		`summary: "${frontmatterSafe(summary)}"\n` +
		`publishedOn: ${publishedOn}\n` +
		`tags:\n${tags.join('\n')}\n` +
		`featured: ${index < 2 ? 'true' : 'false'}\n` +
		`---\n\n` +
		`${importedNote}\n${markdownBody}\n`;

	await writeFile(path.join(outputDir, `${slug}.md`), fileContents);
	console.log(`Imported ${slug}.md`);
}
