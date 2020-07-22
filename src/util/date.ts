// some functions and variables related to dates

export function makeDateForComparison(date: Date) {
  return new Date(
    1970,
    date.getMonth(),
    date.getDate(),
  ).getTime();
}

// doesn't take into account months and days
export function differenceInYears(date1: Date, date2: Date) {
  return (date1.getFullYear() -
    date2.getFullYear());
}

export const today = new Date(Date.now());
