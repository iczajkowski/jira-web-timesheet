import { GetHolidayParams } from "../api/holidays";
import { Holiday } from "../models/Holiday";

const CACHE_KEY = "HOLIDAYS";

class HolidayCache {
  constructor(private storage: Storage) {}

  save(key: GetHolidayParams, holidays: Holiday[]): void {
    const stringifiedKey = this.stringifyKey(key);

    const storedHolidays = { ...this.readStorage(), [stringifiedKey]: holidays };

    this.storage.setItem(CACHE_KEY, JSON.stringify(storedHolidays));
  }

  get(key: GetHolidayParams): Holiday[] {
    const storedHolidays = this.readStorage();
    return storedHolidays[this.stringifyKey(key)];
  }

  private stringifyKey(key: GetHolidayParams): string {
    return `${key.country}-${key.month}-${key.year}`;
  }

  private readStorage(): Record<string, Holiday[]> {
    const stringifiedResult = this.storage.getItem(CACHE_KEY);

    if (!stringifiedResult) {
      return {};
    }

    return JSON.parse(stringifiedResult);
  }
}

const holidayCache = new HolidayCache(localStorage);

export default holidayCache;
