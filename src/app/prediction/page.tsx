'use client';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Brain, Activity, Heart, AlertCircle, UtensilsCrossed, Clock, Award, Users } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Prediction() {
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

    const [showResults, setShowResults] = useState(false);
    
    // Sample data from AI
    const healthData = {
        recommendations: {
            activities: {
                new_step_goal: 7000,
                stress_management_tips: ["Meditation", "Deep breathing"],
                suggested_exercises: ["Brisk walking", "Cycling", "Strength training"]
            },
            diet: {
                foods_to_avoid: ["Processed foods", "Sugary drinks", "High-fat dairy"],
                nearby_healthy_restaurants: [{name: "Green Leaf Café", address: "123 Healthy St, City", rating: 4.5}],
                recommended_foods: ["Leafy greens", "Low-sodium foods", "Nuts and seeds"]
            },
            doctor_suggestions: [{ suggestion: "Schedule an annual checkup" }],
            gamification: {
                daily_challenge: {challenge: "Walk 8,000 steps", reward_points: 50},
                weekly_challenge: {challenge: "Run 10 km total", reward_points: 200},
                clan_suggestions: ["Join 'Heart Healthy Squad'"]
            },
            sleep: {
                recommended_hours: 7,
                improvement_tips: ["Reduce screen time", "Consistent bedtime", "Create a relaxing sleep environment"]
            },
            risk_assessment: [{ condition: "Hypertension", risk_level: "Moderate", preventive_measures: ["Low-sodium diet", "Regular exercise"] }],
            userId: "user_001"
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const resp = await fetch("/api/predict", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if(!resp.ok) {
            toast("Error generating health prediction", {
                description: "Please try again later",
                action: {
                    label: "Retry",
                    onClick: () => console.log("Retry prediction"),
                },
            });
            return;
        }
        const data = await resp.json();
        console.log(JSON.parse(data.content));
        
        setShowResults(true);
        toast("Health prediction completed!", {
            description: "Scroll down to view your personalized recommendations",
            action: {
                label: "View",
                onClick: () => console.log("View recommendations"),
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

                        {/* Results section */}
                        {showResults && (
                            <div className="mt-16 space-y-6">
                                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Your Health Assessment</h2>
                                
                                {/* Risk Assessment Section */}
                                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertCircle className="text-orange-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Risk Assessment</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {healthData.recommendations.risk_assessment.map((risk, index) => (
                                            <div key={index} className="bg-white p-4 rounded-md border border-orange-100">
                                                <p className="font-medium text-gray-800">{risk.condition} Risk: <span className="text-orange-500">{risk.risk_level}</span></p>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-600 font-medium">Preventive Measures:</p>
                                                    <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                                        {risk.preventive_measures.map((measure, idx) => (
                                                            <li key={idx}>{measure}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Activity Recommendations */}
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity className="text-blue-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Activity Recommendations</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-md border border-blue-100">
                                            <p className="font-medium text-gray-800">Daily Step Goal</p>
                                            <p className="text-3xl font-bold text-blue-500 mt-1">{healthData.recommendations.activities.new_step_goal.toLocaleString()}</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-blue-100">
                                            <p className="font-medium text-gray-800">Suggested Exercises</p>
                                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                                {healthData.recommendations.activities.suggested_exercises.map((exercise, index) => (
                                                    <li key={index}>{exercise}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-blue-100 md:col-span-2">
                                            <p className="font-medium text-gray-800">Stress Management</p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {healthData.recommendations.activities.stress_management_tips.map((tip, index) => (
                                                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tip}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Diet Recommendations */}
                                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <UtensilsCrossed className="text-green-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Nutrition Plan</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-md border border-green-100">
                                            <p className="font-medium text-gray-800">Recommended Foods</p>
                                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                                {healthData.recommendations.diet.recommended_foods.map((food, index) => (
                                                    <li key={index}>{food}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-green-100">
                                            <p className="font-medium text-gray-800">Foods to Avoid</p>
                                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                                {healthData.recommendations.diet.foods_to_avoid.map((food, index) => (
                                                    <li key={index}>{food}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-green-100 md:col-span-2">
                                            <p className="font-medium text-gray-800">Nearby Healthy Restaurants</p>
                                            {healthData.recommendations.diet.nearby_healthy_restaurants.map((restaurant, index) => (
                                                <div key={index} className="mt-2">
                                                    <p className="text-sm font-medium">{restaurant.name} ⭐ {restaurant.rating}</p>
                                                    <p className="text-sm text-gray-500">{restaurant.address}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Sleep Recommendations */}
                                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Clock className="text-indigo-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Sleep Optimization</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-md border border-indigo-100">
                                            <p className="font-medium text-gray-800">Recommended Sleep</p>
                                            <p className="text-3xl font-bold text-indigo-500 mt-1">{healthData.recommendations.sleep.recommended_hours} hours</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-indigo-100">
                                            <p className="font-medium text-gray-800">Sleep Improvement Tips</p>
                                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                                {healthData.recommendations.sleep.improvement_tips.map((tip, index) => (
                                                    <li key={index}>{tip}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gamification */}
                                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Award className="text-purple-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Fitness Challenges</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-md border border-purple-100">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-medium text-gray-800">Daily Challenge</p>
                                                    <p className="text-sm text-gray-600 mt-1">{healthData.recommendations.gamification.daily_challenge.challenge}</p>
                                                </div>
                                                <div className="bg-purple-100 px-3 py-1 rounded-full">
                                                    <p className="text-purple-700 text-sm font-medium">{healthData.recommendations.gamification.daily_challenge.reward_points} pts</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-purple-100">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-medium text-gray-800">Weekly Challenge</p>
                                                    <p className="text-sm text-gray-600 mt-1">{healthData.recommendations.gamification.weekly_challenge.challenge}</p>
                                                </div>
                                                <div className="bg-purple-100 px-3 py-1 rounded-full">
                                                    <p className="text-purple-700 text-sm font-medium">{healthData.recommendations.gamification.weekly_challenge.reward_points} pts</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-md border border-purple-100 md:col-span-2">
                                            <div className="flex items-center gap-2">
                                                <Users className="text-purple-500 w-5 h-5" />
                                                <p className="font-medium text-gray-800">Suggested Communities</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {healthData.recommendations.gamification.clan_suggestions.map((clan, index) => (
                                                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{clan}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Doctor Suggestions */}
                                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Heart className="text-red-500 w-6 h-6" />
                                        <h3 className="text-xl font-semibold text-gray-800">Medical Recommendations</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-md border border-red-100">
                                        <ul className="list-disc pl-5 text-gray-600">
                                            {healthData.recommendations.doctor_suggestions.map((item, index) => (
                                                <li key={index}>{item.suggestion}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="flex justify-center mt-8">
                                    <Button 
                                        onClick={() => window.print()} 
                                        className="bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    >
                                        Save Results
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Prediction;