import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ pages: 'docs' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/solaris' : ''
		}
	}
};

export default config;
