import { LOG } from "../models/log.models.js";
import { asyncHandler } from "../utils/handler.utils.js";
import { ErrorResponse, SuccessResponse } from "../utils/responses.utils.js";

export const createLog = asyncHandler(async (req, res) => {
    // Extract log details from the incoming request body
    const { timestamp, logLevel, source, message, environment } = req.body;

    // Create a new log entry
    const log = await LOG.create({
        timestamp: timestamp ? new Date(timestamp) : Date.now(), // Convert to Date if timestamp is provided
        logLevel,
        source,
        message,
        environment: environment || "production" // Default to 'production' if not provided
    });

    return SuccessResponse(res, `Log created. Id: ${log._id}`);
});


export const getLogs = asyncHandler(async (req, res) => {
    const logs = await LOG.find({}).sort({ timestamp: -1 });
    return SuccessResponse(res, ``, logs);
});