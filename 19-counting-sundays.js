function countingSundays(firstYear, lastYear) {
  let months = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
  }

  let count = 0;
  let weekDay = firstDay();
  if (weekDay == 7) count++

  for (let i = firstYear; i <= lastYear; i++) {
    for (let day in months) {
      if (i % 4 == 0) months[2] = 29;
      else months[2] = 28;
      weekDay += months[day] % 7;
      if (weekDay > 7) weekDay %= 7
      if (weekDay == 7) count++
    }
  }

  function firstDay() {
    let weekDay = 1;
    for (let i = 1901; i <= firstYear; i++) {
      if (((i-1) % 4 == 0) && i != 1901) weekDay += 2;
      else weekDay += 1;
      if(weekDay > 7) weekDay %= 7;
    }
    return weekDay
  }
  return count;
}

console.log(countingSundays(1995, 2000));
