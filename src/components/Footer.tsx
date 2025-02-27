
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Health Predictor AI
            </h3>
            <p className="text-gray-600 mb-4 max-w-sm">
              Empowering individuals with AI-driven health insights for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Links</h4>
            <ul className="space-y-2">
              {["About", "Features", "Privacy", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">Connect</h4>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-green-700" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Health Predictor AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
