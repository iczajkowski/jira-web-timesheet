import { ClientConfig } from "../jira-client/models/client-config";
import { sign } from "jsonwebtoken";

const generateJWT = (config: ClientConfig, expiresIn: Date) => {
  return sign(
    {
      expIn: expiresIn,
      data: config
    },
    process.env.JWT_PRIVATE as string
  );
};

export const authentication = {
  generateJWT
};
