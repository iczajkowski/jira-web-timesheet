import { ClientConfig } from "./models/client-config";
import isEmail from "validator/lib/isEmail";
import isURL = require("validator/lib/isURL");

export const cofigValidator = (clientConfig: ClientConfig) => {
  return (
    clientConfig &&
    validateEmail(clientConfig) &&
    validateURL(clientConfig) &&
    clientConfig.apiToken
  );
};

const validateEmail = ({ email }: { email: string }) => {
  return email && isEmail(email);
};

const validateURL = ({ url }: { url: string }) => {
  return (
    url && isURL(url) && (!url.startsWith("http") || url.startsWith("https"))
  );
};
