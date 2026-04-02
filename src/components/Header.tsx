import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../store/useTheme";

export default function Header() {
	const isDarkMode = useTheme((state) => state.isDarkMode);
	const toggleTheme = useTheme((state) => state.toggleTheme);

	return (
		<header className="sticky top-0 z-50 flex w-full items-center justify-between bg-var(--background)/95 p-6 backdrop-blur-md md:p-10">
			{/* Brand Logo */}
			<div className="font-heading text-xl font-bold tracking-tight text-(--heading) uppercase">
				ALKIMMY
			</div>

			<button
				type="button"
				onClick={toggleTheme}
				className="
          flex items-center justify-center
          rounded-full p-3
          transition-colors duration-300
          bg-(--text) text-(--bg)
          dark:bg-(--bg dark:text-(--text)
          hover:brightness-90
        "
				aria-label="Toggle theme"
			>
				{isDarkMode ? (
					<SunIcon className="h-5 w-5 text-(--bg)" />
				) : (
					<MoonIcon className="h-5 w-5 text-(--bg)" />
				)}
			</button>
		</header>
	);
}
