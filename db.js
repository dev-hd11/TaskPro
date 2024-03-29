import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB() {
    if (isConnected) {
        console.log("Database is already connected.");
        return;
    }

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/taskpro2');
        isConnected = true;
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

export function getConnection() {
    if (!isConnected) {
        throw new Error("Database is not connected.");
    }
    return mongoose.connection;
}
