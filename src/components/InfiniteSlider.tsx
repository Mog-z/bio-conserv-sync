import { useEffect, useRef } from "react";

const logos = [
  "Logo 1",
  "Logo 2",
  "Logo 3",
  "Logo 4",
  "Logo 5",
  "Logo 6",
  "Logo 7",
  "Logo 8",
];

const InfiniteSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleReducedMotion = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && scrollRef.current) {
        scrollRef.current.style.animation = 'none';
      }
    };
    
    handleReducedMotion();
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleReducedMotion);
    
    return () => {
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-left" ref={scrollRef}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-64 h-32 mx-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-semibold text-xl"
            >
              {logo}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-64 h-32 mx-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-semibold text-xl"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
