function fiboEvenSum(n) {
  let sum = 2;
  let first = 1;
  let fib = 2;
  while (n > fib) {
    let temp = fib;
    fib += first;
    first = temp;
    if (fib > n) break;
    if (fib % 2 == 0) sum += fib;
  }
  return sum;
}

console.log(fiboEvenSum(1000));
