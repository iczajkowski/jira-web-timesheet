import { Request, Response, Router } from "express";
import { authentication } from "../shared/Authentication";
import { BAD_REQUEST, OK } from "http-status-codes";
import { ClientConfig } from "../jira-client/models/client-config";

const router = Router();

router.get(
  "",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const { query } = req.query;
    if (!query) {
      return res.status(BAD_REQUEST).end();
    }
    const config = req.params[authentication.DECODED_CONFIG] as ClientConfig;
    res.status(OK).end();
  }
);

export default router;
