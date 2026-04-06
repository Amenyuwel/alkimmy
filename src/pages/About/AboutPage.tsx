export default function AboutPage() {
	return (
		<div className="flex h-screen w-full flex-col bg-background text-body transition-colors duration-300 ease-in-out">
			<main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
				<section className="max-w-3xl space-y-8">
					<h1 className="font-heading font-medium text-5xl text-heading tracking-tighter md:text-7xl">
						About Us
					</h1>
					<p className="mx-auto max-w-lg font-sans text-lg leading-relaxed opacity-90 md:text-xl">
						We'd love to hear from you! Whether you have questions, feedback, or just want to say
						hello, feel free to reach out.
					</p>
				</section>
			</main>
		</div>
	);
}
