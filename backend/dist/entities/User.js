"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, index: true, required: true },
    lastActiveTime: { type: Date, default: Date.now }
});
const User = mongoose_1.model("User", userSchema);
exports.default = User;
