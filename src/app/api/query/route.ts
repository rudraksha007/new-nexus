import { generate } from "@/lib/utils/llamaHelper";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {prompt} = await req.json();
        const response = await generate(prompt);
        return NextResponse.json(response); 
    }
    catch (error) {
        console.error("Error getting doctors: ", error);
        return NextResponse.json({ error: "Error getting response" }, { status: 500 });
    }

}