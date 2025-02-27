'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Brain, Activity, Heart, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Prediction = () => {
    const [formData, setFormData] = useState({
        age: "",
        weight: "",
        height: "",
        activityLevel: "",
        sleepHours: "",
        familyHistory: "",
        bloodPressure: "",
        bloodSugar: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we'll add the ML model prediction logic later        
        toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-16">
                <section className="bg-gradient-to-b from-green-50 to-white py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                                AI-Powered Health Prediction
                            </h1>
                            <p className="text-xl text-gray-600">
                                Use our advanced machine learning model to assess your risk for various
                                lifestyle diseases and get personalized health recommendations.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Age</label>
                                    <Input
                                        type="number"
                                        placeholder="Enter your age"
                                        value={formData.age}
                                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Weight (kg)</label>
                                    <Input
                                        type="number"
                                        placeholder="Enter your weight"
                                        value={formData.weight}
                                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Height (cm)</label>
                                    <Input
                                        type="number"
                                        placeholder="Enter your height"
                                        value={formData.height}
                                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Activity Level</label>
                                    <Select
                                        value={formData.activityLevel}
                                        onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select activity level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sedentary">Sedentary</SelectItem>
                                            <SelectItem value="light">Lightly Active</SelectItem>
                                            <SelectItem value="moderate">Moderately Active</SelectItem>
                                            <SelectItem value="very">Very Active</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Sleep Hours</label>
                                    <Input
                                        type="number"
                                        placeholder="Average hours of sleep"
                                        value={formData.sleepHours}
                                        onChange={(e) => setFormData({ ...formData, sleepHours: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Family History</label>
                                    <Select
                                        value={formData.familyHistory}
                                        onValueChange={(value) => setFormData({ ...formData, familyHistory: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select conditions" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">No History</SelectItem>
                                            <SelectItem value="diabetes">Diabetes</SelectItem>
                                            <SelectItem value="heart">Heart Disease</SelectItem>
                                            <SelectItem value="hypertension">Hypertension</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 cursor-pointer">
                                <Brain className="w-4 h-4 mr-2" />
                                Generate Prediction
                            </Button>
                        </form>

                        {/* Results section will be added here when we integrate the ML model */}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Prediction;
