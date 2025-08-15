import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(process.cwd(), './src'),
		},
	},
	esbuild: {
		jsx: 'automatic'
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
			generateScopedName: '[name]__[local]___[hash:base64:5]'
		},
		postcss: './postcss.config.js'
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets'
	}
})
