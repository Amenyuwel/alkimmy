import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
// import logo from "../assets/logo/Alkimmy.svg";
import { useTheme } from "../store/useTheme";

export default function Header() {
	const isDarkMode = useTheme((state) => state.isDarkMode);
	const toggleTheme = useTheme((state) => state.toggleTheme);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`sticky top-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? "px-6 pt-4" : ""}`}
		>
			<header
				className={`flex h-20 w-full items-center justify-between bg-opacity-20 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 md:p-10 ${
					scrolled ? "max-w-5xl rounded-full shadow-lg" : "rounded-none"
				}`}
				style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
			>
				<div className="flex items-center font-bold font-heading text-(--text) text-xl uppercase tracking-tighter">
					<div className="mr-3 flex h-40 w-30 items-center justify-center">
						{/* <img
							src={logo}
							alt="Alkimmy Logo"
							className="h-full w-full object-contain text-(--bg) transition-all duration-300 dark:text-(--text)"
						/> */}
					</div>
					<span className="leading-none">ALKIMMY</span>
				</div>

				<button
					type="button"
					onClick={toggleTheme}
					className="flex items-center justify-center rounded-full bg-(--text) p-3 text-(--bg) transition-colors duration-300 hover:brightness-90 dark:bg-(--text) dark:text-(--bg)"
					aria-label="Toggle theme"
				>
					{isDarkMode ? (
						<SunIcon className="h-5 w-5 text-(--bg)" />
					) : (
						<MoonIcon className="h-5 w-5 text-(--bg)" />
					)}
				</button>
			</header>
		</div>
	);
}
