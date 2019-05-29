export function weekdayCalc(date) {
  let weekdayValue = date.getDay();
  if (weekdayValue === 0) {
    return "Sunday";
  } else if (weekdayValue === 1) {
    return "Monday";
  } else if (weekdayValue === 2) {
    return "Tuesday";
  } else if (weekdayValue === 3) {
    return "Wednesday";
  } else if (weekdayValue === 4) {
    return "Thursday";
  } else if (weekdayValue === 5) {
    return "Friday";
  } else if (weekdayValue === 6) {
    return "Saturday";
  }
}
