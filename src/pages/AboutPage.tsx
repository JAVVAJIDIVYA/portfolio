import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-[#f4f4f4]">
    <Navbar />
    <div className="pt-20">
      <AboutSection />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
