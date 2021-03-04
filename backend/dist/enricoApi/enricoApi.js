"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const shared_1 = require("../shared");
const toStringParams = (obj) => Object.keys(obj).reduce((aggregate, key) => {
    return Object.assign(Object.assign({}, aggregate), { [key]: String(obj[key]) });
}, {});
exports.getEnricoApi = (url) => {
    return {
        getHolidaysForMonth: (context) => {
            shared_1.logger.debug(`Fetching enrico holidays for month: ${context.month}, year: ${context.year}, country: ${context.country}`);
            const urlParams = new URLSearchParams(Object.assign(Object.assign({}, toStringParams(context)), { action: "getHolidaysForMonth" }));
            return axios_1.default.get(url, { params: urlParams }).then((res) => res.data);
        },
    };
};
const enricoApi = exports.getEnricoApi("https://kayaposoft.com/enrico/json/v2.0/");
exports.default = enricoApi;
