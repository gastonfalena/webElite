const Factorial = (n: number) => {
  if (n < 0) {
    n = Math.abs(n)
  }
  let factorial = n
  for (let i = 1; i < n; i++) {
    factorial = factorial * (n - i)
  }
  return factorial
}
const numero = 5
console.log(`El factorial de ${numero} es: `, Factorial(numero))
