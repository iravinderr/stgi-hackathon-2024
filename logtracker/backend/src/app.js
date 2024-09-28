import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";

const app = express();

// CORS SETUP
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}));

// JSON PARSING
app.use(express.json({ limit: "16kb" }));

// URL PARSING
app.use(express.urlencoded({ extended: true, limit: "16kb "}));

// ROUTE MOUNING
import logRoutes from "./routes/log.routes.js";
app.use("/api/v1", logRoutes);


export default app;