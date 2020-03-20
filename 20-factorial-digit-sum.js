function sumFactorialDigits(n) {
  let factor = [1]
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < factor.length; j++) {
      factor[j] *= i
    }
    separate()
  }

  function separate() {
    for (let i = 0; i < factor.length; i++) {
      if (factor[i] > 9) {
        if (i == factor.length - 1) {
          factor.push(Math.floor(factor[i] / 10))
        }
        else {
          factor[i + 1] += Math.floor(factor[i] / 10)
        }
        factor[i] = factor[i] % 10
      }
    }
  }

  return factor.reduce((a, b) => a += b)
}

console.log(sumFactorialDigits(10));
