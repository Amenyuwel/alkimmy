export default function LandingPage() {
	return (
		<div className="flex h-screen w-full flex-col bg-background text-body transition-colors duration-300 ease-in-out">
			{/* Main Content */}
			<main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
				<section className="max-w-3xl space-y-8">
					{/* H1: Primary SEO Target */}
					<h1 className="font-heading text-7xl font-medium tracking-tighter text-heading md:text-9xl">
						Alkimmy
					</h1>

					<p className="mx-auto max-w-lg font-sans text-lg leading-relaxed opacity-90 md:text-2xl">
						A high-performance, SEO-compliant interface powered by
						<span className="text-accent font-semibold"> Lato</span> and
						<span className="text-accent font-semibold italic"> Playfair Display</span>.
					</p>
				</section>
			</main>

			{/* Minimal Footer for SEO */}
			<footer className="w-full p-8 text-center">
				<p className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-sans">
					© {new Date().getFullYear()} Alkimmy Studio — All Rights Reserved
				</p>
			</footer>
		</div>
	);
}
