import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MembersSection from "@/components/MembersSection";

const Members = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <MembersSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Members;
