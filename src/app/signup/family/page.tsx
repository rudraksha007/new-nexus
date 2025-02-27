'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/navigation";

const steps = [
  {
    id: "basic",
    name: "Basic Information",
  },
  {
    id: "lifestyle",
    name: "Lifestyle Habits",
  },
  {
    id: "health",
    name: "Health Metrics",
  },
  {
    id: "environment",
    name: "Environmental Factors",
  },
  {
    id: "medical",
    name: "Medical History",
  },
];

const FamilyPrediction = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useRouter();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    sleepHours: "",
    exercise: "",
    smoking: "no",
    alcohol: "no",
    diet: "",
    calorieIntake: "",
    bmi: "",
    bloodPressure: "",
    sugarLevels: "",
    ecg: "normal",
    airQuality: "",
    pollution: "",
    existingConditions: "",
    pastConditions: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate.back();
    }
  };
  const handleSubmit = (e: React.FormEvent) => {        
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Navigate to results or process data
    fetch("/api/collect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({data: formData}),
    })
      .then((res) => {if(res.ok) {navigate.push('/')}})
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                placeholder="Enter age"
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => handleInputChange("gender", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  placeholder="Weight in kg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  placeholder="Height in cm"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sleepHours">Average Sleep Hours</Label>
              <Slider
                id="sleepHours"
                max={12}
                step={0.5}
                value={[Number(formData.sleepHours) || 7]}
                onValueChange={(value) =>
                  handleInputChange("sleepHours", value[0].toString())
                }
                className="py-4"
              />
              <p className="text-sm text-gray-500 text-right">
                {formData.sleepHours || "7"} hours
              </p>
            </div>

            <div className="space-y-2">
              <Label>Exercise Frequency</Label>
              <RadioGroup
                value={formData.exercise}
                onValueChange={(value) => handleInputChange("exercise", value)}
                className="flex flex-col space-y-2"
              >
                {["Never", "Rarely", "Sometimes", "Often", "Daily"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.toLowerCase()}
                        id={option.toLowerCase()}
                      />
                      <Label htmlFor={option.toLowerCase()}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Smoking</Label>
                <RadioGroup
                  value={formData.smoking}
                  onValueChange={(value) => handleInputChange("smoking", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="smoking-yes" />
                    <Label htmlFor="smoking-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="smoking-no" />
                    <Label htmlFor="smoking-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Alcohol Consumption</Label>
                <RadioGroup
                  value={formData.alcohol}
                  onValueChange={(value) => handleInputChange("alcohol", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="alcohol-yes" />
                    <Label htmlFor="alcohol-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="alcohol-no" />
                    <Label htmlFor="alcohol-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodPressure">Blood Pressure</Label>
                <Input
                  id="bloodPressure"
                  placeholder="e.g., 120/80"
                  value={formData.bloodPressure}
                  onChange={(e) =>
                    handleInputChange("bloodPressure", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sugarLevels">Sugar Levels</Label>
                <Input
                  id="sugarLevels"
                  placeholder="mg/dL"
                  value={formData.sugarLevels}
                  onChange={(e) =>
                    handleInputChange("sugarLevels", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>ECG Results</Label>
              <RadioGroup
                value={formData.ecg}
                onValueChange={(value) => handleInputChange("ecg", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="ecg-normal" />
                  <Label htmlFor="ecg-normal">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="abnormal" id="ecg-abnormal" />
                  <Label htmlFor="ecg-abnormal">Abnormal</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="airQuality">Air Quality Rating</Label>
              <RadioGroup
                value={formData.airQuality}
                onValueChange={(value) => handleInputChange("airQuality", value)}
                className="flex flex-col space-y-2"
              >
                {["Excellent", "Good", "Moderate", "Poor", "Very Poor"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.toLowerCase()}
                        id={`air-${option.toLowerCase()}`}
                      />
                      <Label htmlFor={`air-${option.toLowerCase()}`}>
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pollution">Environmental Concerns</Label>
              <Textarea
                id="pollution"
                placeholder="Describe any environmental factors affecting health..."
                value={formData.pollution}
                onChange={(e) => handleInputChange("pollution", e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="existingConditions">
                Current Medical Conditions
              </Label>
              <Textarea
                id="existingConditions"
                placeholder="List any current medical conditions..."
                value={formData.existingConditions}
                onChange={(e) =>
                  handleInputChange("existingConditions", e.target.value)
                }
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pastConditions">Past Medical History</Label>
              <Textarea
                id="pastConditions"
                placeholder="List any past medical conditions or surgeries..."
                value={formData.pastConditions}
                onChange={(e) =>
                  handleInputChange("pastConditions", e.target.value)
                }
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-8">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevStep}
              className="hover:bg-green-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-2xl font-bold text-green-800">
              {steps[currentStep].name}
            </h2>
            <div className="w-8" /> {/* Spacer for alignment */}
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center"
                  style={{ width: index === steps.length - 1 ? "auto" : "100%" }}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      index <= currentStep
                        ? "border-green-500 bg-green-500 text-green-50"
                        : "border-green-300 text-green-800"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                            <div
                                className={`h-1 w-full transition-all duration-500 mx-2 ${
                                index < currentStep ? "bg-green-500" : "bg-green-300"
                                }`}
                            />
                            )}


                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {renderStep()}

            <div className="flex justify-between mt-8">
                
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="w-[100px] cursor-pointer"
              >
                Back
              </Button>
              <Button
                type={currentStep === steps.length - 1 ? "submit" : "button"}
                onClick={currentStep === steps.length - 1 ? undefined : nextStep}
                className="w-[100px] bg-green-700 hover:bg-green-800 cursor-pointer"
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
                {currentStep !== steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FamilyPrediction;
