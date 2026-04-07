import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "#/index.css";
import { Footer } from "#/components/Footer.tsx";
import Header from "#/components/Header.tsx";
import Theme from "#/components/Theme.tsx";
import AboutPage from "#/pages/About/AboutPage.tsx";
import ContactPage from "#/pages/Contact/ContactPage.tsx";
import LandingPage from "#/pages/Landing/LandingPage.tsx";
import ProductPage from "#/pages/Product/ProductPage.tsx";

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
			<ProductPage />
			<ContactPage />
			<Footer />
		</main>
	</StrictMode>,
);
