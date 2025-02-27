
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DataPrivacy from "@/components/DataPrivacy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <DataPrivacy />
      <Footer />
    </div>
  );
};

export default Home;
