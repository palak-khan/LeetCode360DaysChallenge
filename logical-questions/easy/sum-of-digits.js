function sum_of_digits(n) {
//   let sum = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     sum += rem;
//     n = Math.floor(n / 10);
//   }
  return [...String(n)].reduce((a,b)=> a + (+b),0)
}
let ans = sum_of_digits(687);
console.log(ans)


