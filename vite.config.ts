import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
	server: {
		host: true,
		port: 3000,
		watch: {
			usePolling: true,
		},
	},
	plugins: [
		react(),
		checker({
			biome: true,
		}),
	],
});
