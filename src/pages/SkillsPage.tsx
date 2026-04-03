import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
