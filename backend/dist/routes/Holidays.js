"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const http_status_codes_1 = require("http-status-codes");
const enricoApi_1 = __importDefault(require("../enricoApi/enricoApi"));
const router = express_1.Router();
router.get("/", [
    express_validator_1.query("country").notEmpty().isAlpha(),
    express_validator_1.query("month").isInt({ min: 1, max: 12 }),
    express_validator_1.query("year").isInt({ min: 1970, max: 2100 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(http_status_codes_1.BAD_REQUEST).json({ errors: errors.array() });
    }
    const response = yield enricoApi_1.default.getHolidaysForMonth({
        country: req.query.country,
        holidayType: "public_holiday",
        month: req.query.month,
        year: req.query.year,
    });
    return res.status(http_status_codes_1.OK).json(response);
}));
exports.default = router;
