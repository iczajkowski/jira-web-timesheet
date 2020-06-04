import { Request, Response, Router } from "express";
import { authentication } from "../shared/Authentication";
import { BAD_REQUEST, OK } from "http-status-codes";
import { ClientConfig } from "../jira-client/models/client-config";
import issueService from "./../services/IssueService";

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
    const response = await issueService.searchIssue(query, config);
    const historySearchIssues = [
      ...response.sections[0].issues,
      ...response.sections[1].issues
    ].filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
    return res.status(OK).json(historySearchIssues);
  }
);

export default router;
