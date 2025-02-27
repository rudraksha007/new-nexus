'use client';
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const nav = useRouter();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="space-y-6 max-w-4xl relative animate-fade-up">
        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
          AI-Powered Health Predictions
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Empowering Health with AI: 
          <span className="block text-green-800">Predicting Lifestyle Diseases Early</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Leveraging Machine Learning to Predict Risks and Improve Health Outcomes
        </p>
        
        <Button
          onClick={()=> nav.push("/login")}
          className="mt-8 px-8 py-6 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"/>
    </section>
  );
};

export default HeroSection;
