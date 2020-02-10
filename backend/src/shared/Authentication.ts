import { ClientConfig } from "../jira-client/models/client-config";
import { sign, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UNAUTHORIZED } from "http-status-codes";
import moment from "moment";

const ACCESS_TOKEN = "access_token";
const DECODED_CONFIG = "decoded_config";

const generateJWT = (config: ClientConfig) => {
  return sign(
    {
      data: config
    },
    process.env.JWT_PRIVATE as string,
    {
      expiresIn: "1h"
    }
  );
};

const setToken = (res: Response, config: ClientConfig) => {
  const token = generateJWT(config);
  return prolongCookie(res, token);
};

const clearToken = (res: Response) => {
  return res.clearCookie(ACCESS_TOKEN);
};

const prolongCookie = (res: Response, token: string) => {
  return res.cookie(ACCESS_TOKEN, token, {
    httpOnly: true,
    expires: moment()
      .add(1, "hour")
      .toDate()
  });
};

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies[ACCESS_TOKEN];
  if (!token) {
    return res.status(UNAUTHORIZED).end();
  }
  verify(
    token,
    process.env.JWT_PRIVATE as string,
    { ignoreExpiration: false },
    (err, decoded: any) => {
      if (err) {
        return res.status(UNAUTHORIZED).end();
      } else {
        setToken(res, decoded.data);
        req.params[DECODED_CONFIG] = decoded.data;
        next();
      }
    }
  );
};

export const authentication = {
  setToken,
  checkToken,
  clearToken,
  DECODED_CONFIG
};
