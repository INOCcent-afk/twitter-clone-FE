import { Months } from "@/models/IDatePicker";

export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export const getNumberOfDayBaseOnMonth = (month: Months | string): number => {
  let endDay;

  switch (month) {
    case "january":
      endDay = 31;
      break;
    case "february":
      endDay = 29;
      break;
    case "march":
      endDay = 31;
      break;
    case "may":
      endDay = 31;
      break;
    case "july":
      endDay = 31;
      break;
    case "august":
      endDay = 31;
      break;
    case "october":
      endDay = 31;
      break;
    case "december":
      endDay = 31;
      break;
    default:
      endDay = 30;
  }

  return endDay;
};

export const getDays = (month: Months | string): number[] => {
  let days = [];
  let endDay = getNumberOfDayBaseOnMonth(month);

  for (let i = 1; i <= endDay; i++) {
    days.push(i);
  }

  return days;
};

export const getYears = (): number[] => {
  let years = [];
  for (let i = 1900; i <= 2022; i++) {
    years.push(i);
  }

  return years;
};
