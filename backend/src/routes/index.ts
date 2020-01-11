import { Router } from "express";
import UserRouter from "./Users";
import WorklogRouter from "./Worklogs";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/worklogs", WorklogRouter);

// Export the base-router
export default router;
