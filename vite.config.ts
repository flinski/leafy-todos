import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	build: {
		minify: true,
		target: 'esnext',
		outDir: 'dist',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src/'),
		},
	},
})
