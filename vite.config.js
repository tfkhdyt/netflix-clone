import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	plugins: [UnoCSS(), ViteImageOptimizer()],
});
