import heroImage from "@/assets/hero-lab.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Pioneering the Future of{" "}
              <span className="text-primary">Biotechnology</span> and{" "}
              <span className="text-secondary">Conservation</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              INCT-CERBC preserves and explores the biotechnological potential of Brazilian biodiversity through cutting-edge research and global collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <a href="/about">Learn More</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative animate-fade-in order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Biotechnology research laboratory showcasing scientific innovation"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
