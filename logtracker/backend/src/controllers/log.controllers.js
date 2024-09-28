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
    environment: environment || "production", // Default to 'production' if not provided
  });

  return SuccessResponse(res, `Log created. Id: ${log._id}`);
});

const logsData = [
  {
    timestamp: "2024-09-28T10:15:00.000Z",
    logLevel: "INFO",
    source: "AuthenticationService",
    message: "User login successful for user: john_doe",
  },
  {
    timestamp: "2024-09-28T10:20:00.000Z",
    logLevel: "DEBUG",
    source: "PaymentGateway",
    message: "Initiating payment process for transaction ID: 12345ABC",
  },
  {
    timestamp: "2024-09-28T10:25:00.000Z",
    logLevel: "WARN",
    source: "DatabaseService",
    message: "Query execution took longer than expected",
  },
  {
    timestamp: "2024-09-28T10:30:00.000Z",
    logLevel: "ERROR",
    source: "FileUploadService",
    message: "Failed to upload file: report.pdf",
  },
  {
    timestamp: "2024-09-28T10:35:00.000Z",
    logLevel: "FATAL",
    source: "CoreSystem",
    message: "System crash detected, initiating recovery process",
  },
];

export const getLogs = asyncHandler(async (req, res) => {
//   const logs = await LOG.find({}).sort({ timestamp: -1 });
  return SuccessResponse(res, ``, logsData);
});
