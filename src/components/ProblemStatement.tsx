
import { Activity, Heart, Dumbbell } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Growing Concern of Lifestyle Diseases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lifestyle diseases such as diabetes and hypertension are on the rise. Early diagnosis 
            and prevention are key to improving health outcomes. Our project uses ML models to analyze 
            user health data like BMI, physical activity, and dietary habits to predict risks and 
            provide personalized recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Heart Health",
              description: "Monitor cardiovascular health indicators and risk factors",
            },
            {
              icon: Activity,
              title: "Activity Tracking",
              description: "Track daily physical activity and exercise patterns",
            },
            {
              icon: Dumbbell,
              title: "Lifestyle Monitoring",
              description: "Analyze diet, sleep, and other lifestyle factors",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-green-50 hover:bg-green-150 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 group-hover:bg-green-200 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
