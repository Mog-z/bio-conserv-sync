import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground drop-shadow-lg">
            Advancing Biotechnology and Conservation for a{" "}
            <span className="text-primary">Sustainable Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto drop-shadow">
            Integrating research, innovation, and global collaboration to address environmental
            challenges through cutting-edge biotechnology.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-primary drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
