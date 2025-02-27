import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { ECGType, ExerciseLevel } from "@prisma/client";

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        const { data } = await req.json();
        const dbUser = await prisma.user.findUnique({
            where: {
                clerkId: user?.id,
            }
        });
        if (!dbUser) {
            await prisma.user.create({

                data: {
                    clerkId: user?.id || "",
                    name: user?.fullName || "",
                    email: user?.emailAddresses[0].emailAddress || "",
                    age: parseInt(data?.age||0),
                    gender: data.gender,
                    weight: parseFloat(data.weight||1),
                    height: parseFloat(data.height||1),
                    sleepHours: parseFloat(data.sleepHours||8),
                    exercise: (data.exercise || "none").toUpperCase() as ExerciseLevel,
                    smoking: data.smoking==='yes',
                    alcohol: data.alcohol==='yes',
                    diet: data.diet,
                    calorieIntake: parseFloat(data.calorieIntake||0),
                    bmi: parseFloat(data.bmi||0),
                    bloodPressure: data.bloodPressure,
                    sugarLevels: data.sugarLevels,
                    ecg: (data.ecg || "normal").toUpperCase() as ECGType,
                    airQuality: data.airQuality,
                    pollution: data.pollution,
                    existingConditions: data.existingConditions,
                    pastConditions: data.pastConditions,
                }
            });
            return NextResponse.json({ data });
        }
        await prisma.user.update({
            where: {
                clerkId: user?.id,
            },
            data: {
                age: data.age,
                gender: data.gender,
                weight: data.weight || 1,
                height: data.height || 1,
                sleepHours: data.sleepHours || 8,
                exercise: data.exercise,
                smoking: data.smoking,
                alcohol: data.alcohol,
                diet: data.diet,
                calorieIntake: data.calorieIntake,
                bmi: data.bmi,
                bloodPressure: data.bloodPressure,
                sugarLevels: data.sugarLevels,
                ecg: (data.ecg || "normal").toUpperCase() as ECGType,
                airQuality: data.airQuality,
                pollution: data.pollution,
                existingConditions: data.existingConditions,
                pastConditions: data.pastConditions,
            }
        });
        return NextResponse.json({ data });
    }
    catch (error) {
        console.error("Error getting doctors: ", error);
        return NextResponse.json({ error: "Error getting response" }, { status: 500 });
    }

}