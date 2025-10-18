import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import AboutSection from "@/components/AboutSection";
import MembersSection from "@/components/MembersSection";
import InstitutionsSection from "@/components/InstitutionsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import InfiniteSlider from "@/components/InfiniteSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Index = () => {
  const carouselReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const membersReveal = useScrollReveal();
  const institutionsReveal = useScrollReveal();
  const eventsReveal = useScrollReveal();
  const contactReveal = useScrollReveal();
  return <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        
        
        {/* Carousel Section */}
        <section className="py-24" ref={carouselReveal.ref}>
          <div className={`container mx-auto px-4 scroll-reveal ${carouselReveal.isVisible ? 'revealed' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Research in Action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore cutting-edge research and innovation happening at our laboratories and
                research centers.
              </p>
            </div>
            <Carousel />
          </div>
        </section>

        <div ref={aboutReveal.ref} className={`scroll-reveal ${aboutReveal.isVisible ? 'revealed' : ''}`}>
          <AboutSection />
        </div>
        
        <div ref={membersReveal.ref} className={`scroll-reveal ${membersReveal.isVisible ? 'revealed' : ''}`}>
          <MembersSection />
        </div>
        
        <div ref={institutionsReveal.ref} className={`scroll-reveal ${institutionsReveal.isVisible ? 'revealed' : ''}`}>
          <InstitutionsSection />
        </div>
        
        <div ref={eventsReveal.ref} className={`scroll-reveal ${eventsReveal.isVisible ? 'revealed' : ''}`}>
          <EventsSection />
        </div>
        
        <div ref={contactReveal.ref} className={`scroll-reveal ${contactReveal.isVisible ? 'revealed' : ''}`}>
          <ContactSection />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>;
};
export default Index;