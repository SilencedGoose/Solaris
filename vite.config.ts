import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	// Relative base so the build works whether served from the domain root
	// (solarisli.dev) or a subpath (e.g. a GitHub Pages project URL).
	base: './',
	build: {
		outDir: 'docs'
	}
});
