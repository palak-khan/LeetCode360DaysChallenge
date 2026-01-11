function check_perfect(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  console.log(sum);
  return n == sum ? true : false;
}
console.log(check_perfect(6));
  