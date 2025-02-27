
import { Shield, User, BarChart } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform helps you stay ahead of health risks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Accurate Risk Predictions",
              description:
                "Get precise predictions about potential health risks based on your data",
            },
            {
              icon: User,
              title: "Personalized Recommendations",
              description:
                "Receive tailored advice and actionable steps for better health",
            },
            {
              icon: BarChart,
              title: "Easy-to-Understand Dashboard",
              description:
                "Track your health metrics and progress with our intuitive interface",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <feature.icon className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
