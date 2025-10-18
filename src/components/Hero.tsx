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
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground drop-shadow-lg">
            Pioneering the Future of{" "}
            <span className="text-primary">Biotechnology and Conservation</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto drop-shadow">
            INCT-CERBC aims to preserve and explore the biotechnological potential of microorganisms (fungal and bacteria) and parasites of clinical and environmental origin that make up Brazilian biodiversity, as well as those from the collections of other countries through the international institutions associated with this proposal.
          </p>
          
          {/* CERBC in Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">49</div>
              <div className="text-sm text-muted-foreground">National Members</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">International Members</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 text-center border border-border hover:border-primary transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">329</div>
              <div className="text-sm text-muted-foreground">Published Articles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-label="Scroll down">
        
      </button>
    </section>;
};
export default Hero;