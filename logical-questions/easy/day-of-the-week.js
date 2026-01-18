//dayOfWeek = (d + monthCode + yearCode) % 7
function dayOfTheWeek(d, m, y) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeap = (year) =>
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  let totalDays = 0;

  for (let year = 0; year < y; year++) {
    totalDays += isLeap(year) ? 366 : 365;
}
console.log(totalDays)

  if (isLeap(y)) daysInMonth[1] = 29;

  for (let month = 0; month < m - 1; month++) {
    totalDays += daysInMonth[month];
  }

  totalDays += d;
  console.log(totalDays)

  return totalDays % 7;
}

console.log(dayOfTheWeek(28, 12, 1995));


