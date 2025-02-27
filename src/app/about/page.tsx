
import { Brain, Heart, Shield, Target, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models for accurate health predictions"
    },
    {
      icon: Target,
      title: "Personalized Insights",
      description: "Tailored health recommendations based on your unique profile"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your health data is protected with enterprise-grade security"
    }
  ];

  const services = [
    {
      title: "Disease Prediction",
      description: "Early detection of potential lifestyle diseases using ML algorithms"
    },
    {
      title: "Health Tracking",
      description: "Comprehensive monitoring of vital health metrics over time"
    },
    {
      title: "Personalized Recommendations",
      description: "Actionable insights for improving your health outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Health Predictor AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Welcome to our platform focused on Early Prediction of Lifestyle Diseases.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  Lifestyle diseases such as diabetes, hypertension, and heart disease are increasingly 
                  prevalent due to sedentary living, poor dietary habits, and other lifestyle factors. 
                  Our mission is to empower individuals with the tools they need to make informed health 
                  decisions before these diseases become a serious concern.
                </p>
                <p className="text-gray-600">
                  We have developed a cutting-edge machine learning (ML) model that analyzes personal 
                  health data, including parameters like Body Mass Index (BMI), physical activity levels, 
                  and dietary habits.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <feature.icon className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-green-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
