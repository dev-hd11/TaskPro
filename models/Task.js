import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    name: String,
    isComplete: Boolean,
    task_id: String
})

export const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)