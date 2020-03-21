function sumAmicableNum(n) {
  let amicable = 0;
  for (let a = 200; a < n; a++) {
    let b = sumDivisors(a);
    if (sumDivisors(b) == a && a != b) amicable += a;
  }

  function sumDivisors(num) {
    let sum = 0
    for (let i = 1; i <= num/2; i++) {
      if (num % i == 0) sum += i;
    }
    return sum;
  }
  return amicable;
}

console.log(sumAmicableNum(1000));
