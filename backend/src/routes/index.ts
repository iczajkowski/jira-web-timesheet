import { Router } from "express";
import UserRouter from "./Users";
import WorklogRouter from "./Worklogs";
import IssueRouter from "./Issues";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/worklogs", WorklogRouter);
router.use("/issues", IssueRouter);

// Export the base-router
export default router;
