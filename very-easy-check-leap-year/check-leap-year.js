function checkLeapYear(year) {
  if (year % 400 === 0) {
    console.log(`${year} is a leap year`);
    return;
  }
  if (year % 100 === 0) {
    console.log(`${year} is not a leap year`);
    return;
  }
  if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
    return;
  }
  console.log(`${year} is not a leap year`);
}

checkLeapYear(2000);
checkLeapYear(1900);
checkLeapYear(1996);
checkLeapYear(1997);
