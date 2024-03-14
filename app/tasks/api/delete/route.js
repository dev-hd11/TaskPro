import { NextResponse } from "next/server";
import { Task } from "@/models/Task";
import connectDB from "@/db";

export async function POST(request) {
    await connectDB()
    
    let data = await request.json()

    let i = await Task.deleteOne({task_id: data.task_id})

    return NextResponse.json({
        status: 'ok'
    })


}