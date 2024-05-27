const memoization = (fn) => {
  let results = {}
  return (args) => {
    if (!results[args]) {
      results[args] = fn(args)
    }
    return results[args]
  }
}

const Fibonacci = memoization((n: number) => {
  if (n < 0) {
    n = Math.abs(n)
  }
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  return Fibonacci(n - 1) + Fibonacci(n - 2)
})
console.log(Fibonacci(7))
