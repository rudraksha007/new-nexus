import { generate } from "@/lib/utils/llamaHelper";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    try {
        const dbUser = await currentUser();
        const {long, lat} = await req.json();
        const userData = await prisma.user.findUnique({
            where: {
                id: dbUser?.id,
            },
            include: {
                activity: true,
                healthData: true,
                doctorRecommendations: true,
                suggestions: true,
                clans: true,
                Gamification: true,
                MealPlan: true,
            },
        });
        const response = await generate(JSON.stringify({...userData}));
        return NextResponse.json(response);
    }
    catch (error) {
        console.error("Error getting doctors: ", error);
        return NextResponse.json({ error: "Error getting response" }, { status: 500 });
    }

}