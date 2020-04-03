import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK, UNAUTHORIZED } from "http-status-codes";
import { cofigValidator } from "../jira-client/configuration-validator";
import userService from "./../services/UserService";
import { ClientConfig } from "../jira-client/models/client-config";
import { mapJiraError } from "../jira-client/jira-error-mapper";
import { authentication } from "../shared/Authentication";
import { AuthenticateRequest } from "../models/authenticate-request";

// Init shared
const router = Router();

router.get(
  "/current",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const config = req.params[authentication.DECODED_CONFIG] as ClientConfig;
    const user = await userService.getCurrentUser(config);
    return res.status(OK).json({ user, url: config.url });
  }
);

router.post(
  "/logout",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    return authentication.clearToken(res).end();
  }
);

router.post("/authenticate", async (req: Request, res: Response) => {
  const config = req.body as AuthenticateRequest;
  if (!cofigValidator(config)) {
    return res.status(BAD_REQUEST).end();
  }
  try {
    const user = await userService.getCurrentUser(config);
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
});

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
      const result = await userService.searchUsers(query, config);
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
  }
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
      const user = await userService.getUser(accountId, config);
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
  }
);

export default router;
