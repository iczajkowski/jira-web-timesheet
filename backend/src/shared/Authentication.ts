import { ClientConfig } from "../jira-client/models/client-config";
import { sign, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UNAUTHORIZED } from "http-status-codes";

const ACCESS_TOKEN = "access_token";
const DECODED_CONFIG = "decoded_config";

const generateJWT = (config: ClientConfig) => {
  return sign(
    {
      data: config
    },
    process.env.JWT_PRIVATE as string
  );
};

const setToken = (res: Response, config: ClientConfig) => {
  const token = generateJWT(config);
  return res.cookie(ACCESS_TOKEN, token, { httpOnly: true });
};

const clearToken = (res: Response) => {
  return res.clearCookie(ACCESS_TOKEN);
};

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies[ACCESS_TOKEN];
  if (!token) {
    return res.status(UNAUTHORIZED).end();
  }
  verify(token, process.env.JWT_PRIVATE as string, {}, (err, decoded: any) => {
    if (err) {
      return res.status(UNAUTHORIZED).end();
    } else {
      req.params[DECODED_CONFIG] = decoded.data;
      next();
    }
  });
};

export const authentication = {
  setToken,
  checkToken,
  clearToken,
  DECODED_CONFIG
};
