import product from "#/assets/products/Purple-Red.png";
import FlatBottomCircle from "#/components/Shape.tsx";
import content from "#/texts/Landing.json";

export default function LandingPage() {
  const { hero } = content;

  return (
    <div className="flex h-screen w-full flex-col bg-(--background-image) text-body transition-colors duration-300 ease-in-out">
      <main className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-7xl grid-cols-2 items-center gap-12 px-8">

          <section className="flex flex-col items-start justify-center space-y-6">
            <h1 className="font-heading text-8xl font-semibold tracking-wide text-heading">
              <span>{hero.heading.start}</span>,{" "}
              {hero.heading.end}{" "}
              <span className="gradient-text font-playfair">{hero.heading.highlight}</span>
            </h1>

            <p className="max-w-lg text-2xl leading-snug text-body/30 text-(--text)/75">
              {hero.description}
            </p>

            <div className="flex gap-4 pt-4">
              {hero.buttons.map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className={
                    btn.variant === "primary"
                      ? "rounded-full bg-heading px-6 py-3 text-sm font-medium text-(--text) transition hover:scale-105"
                      : "rounded-full border border-heading/30 px-6 py-3 text-sm font-medium transition hover:bg-heading/10"
                  }
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </section>

          <section className="flex h-full w-full items-center justify-center">
            <FlatBottomCircle size={470} imageSrc={product} />
          </section>

        </div>
      </main>
    </div>
  );
}