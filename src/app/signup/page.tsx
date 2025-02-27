
'use client';
import { useRouter } from "next/navigation";
import { User, Users } from "lucide-react";
import { motion } from "framer-motion";
import SelectionCard from "@/components/SelectionCard";

const Index = () => {
  const router = useRouter();

  const handleSelection = (type: "self" | "family") => {
    // Navigate to the appropriate route
    router.push(`/signup/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-600 bg-green-100 rounded-full">
            Health Prediction
          </span>
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Who would you like to predict for?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose whether you'd like to get health predictions for yourself or your family members.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
        >
          <SelectionCard
            title="For Yourself"
            description="Get personalized health predictions based on your individual health data"
            icon={<User className="w-6 h-6" />}
            onClick={() => handleSelection("self")}
          />
          <SelectionCard
            title="For Family Members"
            description="Predict health outcomes for your loved ones using their health information"
            icon={<Users className="w-6 h-6" />}
            onClick={() => handleSelection("family")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
