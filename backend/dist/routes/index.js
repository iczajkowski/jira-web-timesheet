"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = __importDefault(require("./Users"));
const Worklogs_1 = __importDefault(require("./Worklogs"));
const Issues_1 = __importDefault(require("./Issues"));
const router = express_1.Router();
router.use("/users", Users_1.default);
router.use("/worklogs", Worklogs_1.default);
router.use("/issues", Issues_1.default);
exports.default = router;
