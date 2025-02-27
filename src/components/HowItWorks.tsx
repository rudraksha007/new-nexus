
const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Input your health metrics and lifestyle data",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our ML model processes your health information",
  },
  {
    number: "03",
    title: "Risk Assessment",
    description: "Receive detailed health risk predictions",
  },
  {
    number: "04",
    title: "Recommendations",
    description: "Get personalized health improvement suggestions",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How the Model Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our predictive model uses advanced machine learning algorithms to analyze various 
            user data inputs and predict the risk of developing lifestyle diseases.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-green-800 font-bold text-lg mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-green-200 -z-10 transform translate-x-1/2">
                  <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-green-400 transform -translate-y-1/2 translate-x-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
