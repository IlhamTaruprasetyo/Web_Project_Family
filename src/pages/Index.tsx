import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import History from "@/components/landing/History";
import Gallery from "@/components/landing/Gallery";
import Features from "@/components/landing/Features";
import Announcements from "@/components/landing/Announcements";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      <Hero />
      <section id="sejarah">
        <History />
      </section>
      <Announcements />
      <section id="galeri">
        <Gallery />
      </section>
      <section id="fitur">
        <Features />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
