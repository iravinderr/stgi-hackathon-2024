
const logsData = [
    {
      timestamp: "2024-09-28T10:15:00.000Z",
      logLevel: "INFO",
      source: "AuthenticationService",
      message: "User login successful for user: john_doe"
    },
    {
      timestamp: "2024-09-28T10:20:00.000Z",
      logLevel: "DEBUG",
      source: "PaymentGateway",
      message: "Initiating payment process for transaction ID: 12345ABC"
    },
    {
      timestamp: "2024-09-28T10:25:00.000Z",
      logLevel: "WARN",
      source: "DatabaseService",
      message: "Query execution took longer than expected"
    },
    {
      timestamp: "2024-09-28T10:30:00.000Z",
      logLevel: "ERROR",
      source: "FileUploadService",
      message: "Failed to upload file: report.pdf"
    },
    {
      timestamp: "2024-09-28T10:35:00.000Z",
      logLevel: "FATAL",
      source: "CoreSystem",
      message: "System crash detected, initiating recovery process"
    }
  ];
  
  export default logsData;
  