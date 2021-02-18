export interface HolidayDate {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
}

export interface HolidayEventName {
  lang: string;
  text: string;
}

export interface Holiday {
  date: HolidayDate;
  name: HolidayEventName[];
}