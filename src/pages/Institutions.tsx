import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import InstitutionsSection from "@/components/InstitutionsSection";

const Institutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <InstitutionsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Institutions;
