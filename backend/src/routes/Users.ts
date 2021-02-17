import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { BAD_REQUEST, OK, UNAUTHORIZED } from "http-status-codes";
import { mapJiraError } from "../jira-client/jira-error-mapper";
import { ClientConfig } from "../jira-client/models/client-config";
import { AuthenticateRequest } from "../models/authenticate-request";
import { authentication } from "../shared/Authentication";
import userService from "./../services/UserService";

// Init shared
const router = Router();

router.get(
  "/current",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const config = req.params[authentication.DECODED_CONFIG] as ClientConfig;
    const user = await userService(config).getCurrentUser();
    return res.status(OK).json({ user, url: config.url });
  },
);

router.post(
  "/logout",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    return authentication.clearToken(res).end();
  },
);

router.post(
  "/authenticate",
  [body("url").isURL(), body("email").isEmail(), body("apiToken").notEmpty()],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({ errors: errors.array() });
    }

    const config = req.body as AuthenticateRequest;
    try {
      const user = await userService(config).getCurrentUser();
      if (!user) {
        return res.status(UNAUTHORIZED);
      }
      return authentication
        .setToken(res, config)
        .status(OK)
        .end();
    } catch (error) {
      const jiraError = mapJiraError(error);
      const response = res.status(jiraError.httpStatusCode);
      return jiraError.message
        ? response.json({ message: jiraError.message })
        : response.end();
    }
  },
);

router.get(
  "/search",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const { query } = req.query;
    if (!query) {
      return res.status(BAD_REQUEST).end();
    }
    const config = req.params[authentication.DECODED_CONFIG] as ClientConfig;
    try {
      const result = await userService(config).searchUsers(query);
      return res
        .status(OK)
        .json(result)
        .end();
    } catch (error) {
      const jiraError = mapJiraError(error);
      const response = res.status(jiraError.httpStatusCode);
      return jiraError.message
        ? response.json({ message: jiraError.message })
        : response.end();
    }
  },
);

router.get(
  "/:accountId",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const { accountId } = req.params;
    if (!accountId) {
      return res.status(BAD_REQUEST).end();
    }
    try {
      const config = req.params[authentication.DECODED_CONFIG] as ClientConfig;
      const user = await userService(config).getUser(accountId);
      return res
        .status(OK)
        .json(user)
        .end();
    } catch (error) {
      const jiraError = mapJiraError(error);
      const response = res.status(jiraError.httpStatusCode);
      return jiraError.message
        ? response.json({ message: jiraError.message })
        : response.end();
    }
  },
);

export default router;
