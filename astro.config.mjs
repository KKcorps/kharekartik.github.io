// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
	base,
	output: 'static',
	trailingSlash: 'always',
});
