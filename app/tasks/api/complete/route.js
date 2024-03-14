import { NextResponse } from "next/server";
import { Task } from "@/models/Task";
import connectDB from "@/db";

export async function POST(request) {
    await connectDB()
    
    let data = await request.json()

    
    let update = await Task.updateOne({task_id: data.task_id}, {$set: {isComplete: true}})

    return NextResponse.json({
        status: 'ok'
    })


}