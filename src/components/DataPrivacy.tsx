
import { Lock, ShieldCheck, Eye } from "lucide-react";

const DataPrivacy = () => {
  return (
    <section className="py-24 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Health Data is Safe with Us
          </h2>
          <p className="text-xl text-gray-600">
            We take privacy seriously. All personal health data is encrypted, and our platform 
            follows the best practices for data protection and user confidentiality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "End-to-End Encryption",
              description: "Your data is encrypted at rest and in transit",
            },
            {
              icon: ShieldCheck,
              title: "Secure Infrastructure",
              description: "Built on enterprise-grade security protocols",
            },
            {
              icon: Eye,
              title: "Privacy First",
              description: "Your data is never shared without consent",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataPrivacy;
