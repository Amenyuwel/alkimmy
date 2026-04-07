import product from "../../assets/products/Purple-Red.png";
import FlatBottomCircle from "../../components/Shape";

export default function LandingPage() {
	return (
		<div className="flex h-screen w-full flex-col bg-(--background-image) text-body transition-colors duration-300 ease-in-out">
			<main className="flex flex-1 items-center justify-center">
				{/* Wider container + reduced left padding */}
				<div className="grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-8">
					
					{/* LEFT CONTENT */}
					<section className="flex flex-col items-start justify-center space-y-6">
<h1 className="font-heading text-8xl font-semibold tracking-wide text-heading">
  <span>Elevate Your Nails</span>, 
  Elevate Your <span className="gradient-text font-playfair">Style</span>
</h1>

<p className="max-w-lg text-2xl leading-snug text-body/30 text-(--text)/75">
  Transform your nails with expertly crafted polishes that blend vibrant colors and nourishing care. Discover the perfect shade to express your unique style and make every manicure a masterpiece.
</p>

						<div className="flex gap-4 pt-4">
							<button type="button" className="rounded-full bg-heading px-6 py-3 text-sm font-medium text-(--text) transition hover:scale-105">
								Explore Products
							</button>

							<button type="button" className="rounded-full border border-heading/30 px-6 py-3 text-sm font-medium transition hover:bg-heading/10">
								Learn More
							</button>
						</div>
					</section>

					{/* RIGHT VISUAL */}
					<section className="flex h-full w-full items-center justify-center">
						<FlatBottomCircle size={470} imageSrc={product} />
					</section>

				</div>
			</main>
		</div>
	);
}