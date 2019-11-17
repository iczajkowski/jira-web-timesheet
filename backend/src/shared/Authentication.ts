import { ClientConfig } from "../jira-client/models/client-config";
import { sign, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import moment from "moment";
import { UNAUTHORIZED } from "http-status-codes";

const ACCESS_TOKEN = "access_token";
const DECODED_CONFIG = "decoded_config";

const generateJWT = (config: ClientConfig, expiresIn: Date) => {
  return sign(
    {
      expIn: expiresIn,
      data: config
    },
    process.env.JWT_PRIVATE as string
  );
};

const setToken = (res: Response, config: ClientConfig) => {
  const expires = moment()
    .add(1, "h")
    .toDate();
  const token = generateJWT(config, expires);
  return res.cookie(ACCESS_TOKEN, token, { httpOnly: true, expires });
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
  DECODED_CONFIG
};
