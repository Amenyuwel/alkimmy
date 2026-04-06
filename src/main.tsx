import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer } from "./components/Footer";
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

		{/* The Mesh Background Orbs */}
		<div className="mesh-bg">
			<div className="orb orb-1" />
			<div className="orb orb-2" />
			<div className="orb orb-3" />
		</div>

		{/* Main content wrapper. 
           'relative z-10' ensures your text and components 
           sit on top of the blurred orbs.
        */}
		<main className="relative z-10">
			<Header />
			<LandingPage />
			<AboutPage />
			<ContactPage />
			<Footer />
		</main>
	</StrictMode>,
);
