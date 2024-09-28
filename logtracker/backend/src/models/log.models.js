import mongoose, { Schema } from "mongoose";

const logSchema = new Schema({
    timestamp: {
        type: Date,
        required: true, // Capture the exact time the log was created
        default: Date.now // Automatically set to current time if not provided
    },
    logLevel: {
        type: String,
        enum: ["INFO", "DEBUG", "WARN", "ERROR", "FATAL"],
        required: true // Essential for categorizing log severity
    },
    source: {
        type: String,
        required: true // Indicates the source of the log (app name or service)
    },
    message: {
        type: String,
        required: true // The actual log message describing the event
    },
    environment: {
        type: String,
        required: true, // To distinguish logs from different environments (e.g., production, staging)
    }
});

export const LOG = mongoose.model("LOG", logSchema);
