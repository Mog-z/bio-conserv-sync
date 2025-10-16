import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousel";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Research in Action
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore cutting-edge research and innovation happening at our laboratories and
                research centers.
              </p>
            </div>
            <Carousel />
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
