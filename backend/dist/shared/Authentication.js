"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const http_status_codes_1 = require("http-status-codes");
const moment_1 = __importDefault(require("moment"));
const ACCESS_TOKEN = "access_token";
const DECODED_CONFIG = "decoded_config";
const generateJWT = (config) => {
    const options = config.rememberMe
        ? {}
        : {
            expiresIn: "1h"
        };
    const data = Object.assign({}, config);
    delete data.rememberMe;
    return jsonwebtoken_1.sign({ data }, process.env.JWT_PRIVATE, options);
};
const setToken = (res, request) => {
    const token = generateJWT(request);
    return prolongCookie(res, token, request.rememberMe || false);
};
const clearToken = (res) => {
    return res.clearCookie(ACCESS_TOKEN);
};
const prolongCookie = (res, token, rememberMe) => {
    const expires = rememberMe
        ? undefined
        : moment_1.default()
            .add(1, "hour")
            .toDate();
    return res.cookie(ACCESS_TOKEN, token, {
        httpOnly: true,
        expires
    });
};
const checkToken = (req, res, next) => {
    const token = req.cookies[ACCESS_TOKEN];
    if (!token) {
        return res.status(http_status_codes_1.UNAUTHORIZED).end();
    }
    jsonwebtoken_1.verify(token, process.env.JWT_PRIVATE, { ignoreExpiration: false }, (err, decoded) => {
        if (err) {
            return res.status(http_status_codes_1.UNAUTHORIZED).end();
        }
        else {
            if (decoded.hasOwnProperty("exp")) {
                setToken(res, decoded.data);
            }
            req.params[DECODED_CONFIG] = decoded.data;
            next();
        }
    });
};
exports.authentication = {
    setToken,
    checkToken,
    clearToken,
    DECODED_CONFIG
};
