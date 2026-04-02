import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Theme from "./components/Theme";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import LandingPage from "./pages/Landing/LandingPage";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Failed to find the root element. Check your index.html.");
}

createRoot(rootElement).render(
	<StrictMode>
		<Theme />
		<Header />
		<main>
			<LandingPage />
			<AboutPage />
			<ContactPage />
		</main>
	</StrictMode>,
);
