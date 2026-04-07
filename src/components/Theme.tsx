import { useEffect } from "react";
import { useTheme } from "#/store/useTheme.ts";

export default function Theme() {
	const isDarkMode = useTheme((state) => state.isDarkMode);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	return null;
}
