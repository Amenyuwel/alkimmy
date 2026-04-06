export default function LandingPage() {
	return (
		<div className="flex h-screen w-full flex-col bg-(--background-image) text-body transition-colors duration-300 ease-in-out">
			{/* Main Content */}
			<main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
				<section className="max-w-3xl space-y-8">
					<h1 className="font-heading font-medium text-7xl text-heading tracking-tighter md:text-9xl">
						Alkimmy
					</h1>
				</section>
			</main>
		</div>
	);
}
