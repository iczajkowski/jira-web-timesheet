import { Router } from "express";
import UserRouter from "./Users";
import WorklogRouter from "./Worklogs";
import IssueRouter from "./Issues";
import HolidayRouter from "./Holidays";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/worklogs", WorklogRouter);
router.use("/issues", IssueRouter);
router.use("/holidays", HolidayRouter);

// Export the base-router
export default router;
