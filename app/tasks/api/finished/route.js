'use server'
import { NextResponse } from "next/server";
import { Task } from "@/models/Task";
import connectDB from "@/db";

export async function GET(request) {

    await connectDB()
    console.log('connected');
    const tasks = await Task.find({isComplete: true});


    return NextResponse.json(tasks);
}