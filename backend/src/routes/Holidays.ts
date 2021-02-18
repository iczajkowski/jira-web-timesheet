import { Request, Response, Router } from "express";
import { param, query, validationResult } from "express-validator";
import { BAD_REQUEST, OK } from "http-status-codes";
import enricoApi from "../enricoApi/enricoApi";

const router = Router();

router.get(
  "/",
  [
    query("country").notEmpty().isAlpha(),
    query("month").isInt({ min: 1, max: 12 }),
    query("year").isInt({ min: 1970, max: 2100 }),
  ],
  async (req: Request<any>, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({ errors: errors.array() });
    }
    const response = await enricoApi.getHolidaysForMonth({
      country: req.query.country,
      holidayType: "public_holiday",
      month: req.query.month,
      year: req.query.year,
    });
    return res.status(OK).json(response);
  }
);

export default router;
