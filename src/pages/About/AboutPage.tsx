import Golden from "../../assets/products/Golden.png";
import Pink from "../../assets/products/Pink.png";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-body transition-colors duration-300 ease-in-out">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        
        <section className="max-w-3xl space-y-8 mb-16">
          <h1 className="font-heading font-medium text-5xl text-heading tracking-tighter md:text-7xl">
            About Us
          </h1>
          <p className="mx-auto max-w-lg font-sans text-lg leading-relaxed opacity-90 md:text-xl">
            We are a team dedicated to building beautiful, functional web experiences.
          </p>
        </section>

        <section className="flex w-full max-w-5xl gap-8">
          {/* Card Component Style */}
          {[
            { img: Golden, title: "Golden Harvest", sub: "Premium organic texture" },
            { img: Pink, title: "Pink Blush", sub: "Soft aesthetic finish" },
            { img: Golden, title: "Limited Edition", sub: "Crafted for excellence" },
          ].map((item, index) => (
            <div key={index} className="flex flex-1 flex-col group">
              <div className="relative w-full aspect-3/4 md:aspect-2/3 rounded-2xl overflow-hidden bg-transparent shadow-xl transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                
                {/* Image Section */}
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                {/* Text Section (Inside the rounded div) */}
                <div className="bg-(--orb-3)/40 backdrop-blur-sm p-4 text-center border-t border-black/5">
					<h3 className="font-heading text-lg font-semibold leading-tight">
					{item.title}
					</h3>
                  <p className="text-xs opacity-70 mt-1 uppercase tracking-wider">
                    {item.sub}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}