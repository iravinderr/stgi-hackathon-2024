import { Router } from "express";
import { createLog, getLogs } from "../controllers/log.controllers.js";


const router = Router();

// CREATE LOG BY FluentBit
router.post("/create-log", createLog)

// GET LOGS
router.get("/get-logs", getLogs);

export default router;