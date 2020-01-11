import { Request, Response, Router } from "express";
import { authentication } from "../shared/Authentication";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from "http-status-codes";
import worklogService from "../services/WorklogService";
import moment from "moment";

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
    if (!from.isValid() || !to.isValid()) {
      return res.status(BAD_REQUEST).end();
    }
    const config = req.params[authentication.DECODED_CONFIG];
    try {
      const worklogs = await worklogService.getWorklogs({
        config,
        from: from.toDate(),
        to: to.toDate()
      });
      return res.status(OK).json(worklogs);
    } catch (e) {
      return res.status(INTERNAL_SERVER_ERROR);
    }
  }
);

export default router;
