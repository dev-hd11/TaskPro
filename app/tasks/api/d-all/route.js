import { NextResponse } from "next/server";
import { Task } from "@/models/Task";
import connectDB from "@/db";

export async function POST(request) {
    await connectDB()

    let i = await Task.deleteMany({isComplete: false})

    return NextResponse.json({
        status: 'ok'
    })


}