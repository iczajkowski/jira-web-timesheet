import { ClientConfig } from "../jira-client/models/client-config";
import { sign, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UNAUTHORIZED } from "http-status-codes";
import moment from "moment";
import { AuthenticateRequest } from "../models/authenticate-request";
import userDao from "../daos/UserDao";
import { logger } from "./Logger";

const ACCESS_TOKEN = "access_token";
const DECODED_CONFIG = "decoded_config";

const generateJWT = (config: AuthenticateRequest) => {
  const options = config.rememberMe
    ? {}
    : {
        expiresIn: "1h"
      };
  const data = Object.assign({}, config);
  delete data.rememberMe;
  return sign({ data }, process.env.JWT_PRIVATE as string, options);
};

const setToken = (res: Response, request: AuthenticateRequest) => {
  const token = generateJWT(request);
  return prolongCookie(res, token, request.rememberMe || false);
};

const clearToken = (res: Response) => {
  return res.clearCookie(ACCESS_TOKEN);
};

const prolongCookie = (res: Response, token: string, rememberMe: boolean) => {
  const expires = rememberMe
    ? undefined
    : moment()
        .add(1, "hour")
        .toDate();

  return res.cookie(ACCESS_TOKEN, token, {
    httpOnly: true,
    expires
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
        userDao
          .updateAnonymousUserActiveTime(decoded.data.email)
          .catch(err => logger.error("error logging user:", err));

        if (decoded.hasOwnProperty("exp")) {
          setToken(res, decoded.data);
        }
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
