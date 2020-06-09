import { Request, Response, Router, request } from "express";
import { authentication } from "../shared/Authentication";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import worklogService from "../services/WorklogService";
import moment from "moment";
import { WorklogEntryRequest } from "../models/worklog-request";

const router = Router();

const toDates = ({ from, to }: { from: string; to: string }) => ({
  from: moment(from),
  to: moment(to)
});

router.get(
  "",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    const { from, to } = toDates(req.query);
    const { accountId } = req.query;
    if (!from.isValid() || !to.isValid() || !accountId) {
      return res.status(BAD_REQUEST).end();
    }
    const config = req.params[authentication.DECODED_CONFIG];
    try {
      const worklogs = await worklogService.getWorklogs({
        config,
        from: from.toDate(),
        to: to.toDate(),
        accountId
      });
      return res.status(OK).json(worklogs);
    } catch (e) {
      console.error(e);
      return res.status(INTERNAL_SERVER_ERROR);
    }
  }
);

router.post(
  "",
  authentication.checkToken,
  async (req: Request<any>, res: Response) => {
    try {
      const request = req.body as WorklogEntryRequest;
      const config = req.params[authentication.DECODED_CONFIG];
      const response = await worklogService.addWorklog({ config, request });
      return res.status(OK).json(response);
    } catch (error) {
      console.error(error);
      return res.status(INTERNAL_SERVER_ERROR);
    }
  }
);

export default router;
