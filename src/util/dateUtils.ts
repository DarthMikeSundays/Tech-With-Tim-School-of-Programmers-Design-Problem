// some functions and variables related to dates

export const today = new Date(Date.now());

export function makeDateForInsideYearComparison(date: Date): number {
  return new Date(
    1970,
    date.getMonth(),
    date.getDate(),
  ).getTime();
}

// doesn't take into account months and days
export function getDifferenceInYears(date1: Date, date2: Date): number {
  return (date1.getFullYear() -
    date2.getFullYear());
}

export function getDifferenceInFullYears(date1: Date, date2: Date): number {
  const differenceInYears = getDifferenceInYears(date1, date2);

  // see if the last year is already a full year
  const date1ForComparison = makeDateForInsideYearComparison(
    date1,
  );
  const date2ForComparison = makeDateForInsideYearComparison(
    date2,
  );
  const differenceInFullYears = date1ForComparison >= date2ForComparison
    ? differenceInYears
    : differenceInYears - 1;

  return differenceInFullYears;
}
