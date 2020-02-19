"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const isURL = require("validator/lib/isURL");
exports.cofigValidator = clientConfig => {
  return (
    clientConfig &&
    validateEmail(clientConfig) &&
    validateURL(clientConfig) &&
    clientConfig.apiToken
  );
};
const validateEmail = ({ email }) => {
  return email && isEmail_1.default(email);
};
const validateURL = ({ url }) => {
  return (
    url && isURL(url) && (!url.startsWith("http") || url.startsWith("https"))
  );
};
