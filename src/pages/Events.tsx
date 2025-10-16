import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import EventsSection from "@/components/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <EventsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Events;
