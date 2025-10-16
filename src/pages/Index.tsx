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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Carousel Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

        <AboutSection />
        <MembersSection />
        <InstitutionsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
