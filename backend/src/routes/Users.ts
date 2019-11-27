import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK, UNAUTHORIZED } from "http-status-codes";
import { cofigValidator } from "../jira-client/configuration-validator";
import userService from "./../services/UserService";
import { ClientConfig } from "../jira-client/models/client-config";
import { mapJiraError } from "../jira-client/jira-error-mapper";
import { authentication } from "../shared/Authentication";

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get(
  "/all",
  authentication.checkToken,
  async (req: Request, res: Response) => {
    return res.status(OK).json({ message: "Hello world" });
  }
);

router.get(
  "/current",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const config = req.params[authentication.DECODED_CONFIG];
    const user = await userService.getUser(config);
    return res.status(OK).json(user);
  }
);

router.post("/authenticate", async (req: Request, res: Response) => {
  const config = req.body as ClientConfig;
  if (!cofigValidator(config)) {
    return res.status(BAD_REQUEST).end();
  }
  try {
    const user = await userService.getUser(config);
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

export default router;
