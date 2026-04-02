import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

export const useTheme = create<ThemeState>()(
	persist(
		(set, get) => ({
			isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,

			toggleTheme: () => {
				const newMode = !get().isDarkMode;

				document.documentElement.classList.toggle("dark", newMode);

				set({ isDarkMode: newMode });
			},
		}),
		{ name: "alkimmy-theme" },
	),
);
