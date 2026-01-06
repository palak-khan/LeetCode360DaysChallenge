function check_factorial(n) {
  let fact = 1;
  let i = 1;
  while (i <= n) {
    fact = fact * i;
    i++
  }
  return fact
}
console.log(check_factorial(5));
