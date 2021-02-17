import { Request, Response, Router } from "express";
import enricoApi, { getEnricoApi } from "../enricoApi/enricoApi";

const router = Router();

router.get("", async (req: Request<any>, res: Response) => {
  const response = await enricoApi.getHolidaysForMonth({
    country: "pl",
    holidayType: "public_holiday",
    month: 1,
    year: 2020,
  });
});
