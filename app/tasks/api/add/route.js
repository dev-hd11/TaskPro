import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid'
import { Task } from "@/models/Task";
import connectDB from "@/db";

export async function POST(request) {
    await connectDB()
    
    let data = await request.json()

    const new_data = {
        name: data.task,
        task_id: uuidv4(),
        isComplete: false
    }

    const task = new Task(new_data)
    await task.save()

    return NextResponse.json({
        status: 'ok'
    })


}