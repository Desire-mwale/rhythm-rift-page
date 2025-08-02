import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularTracks from "@/components/PopularTracks";
import AlbumShowcase from "@/components/AlbumShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PopularTracks />
      <AlbumShowcase />
      <Footer />
    </div>
  );
};

export default Index;
