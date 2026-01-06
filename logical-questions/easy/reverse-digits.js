function reverse_of_digits(n) {
  let reverse = 0;
  while (n > 0) {
    let rem = n % 10;
    reverse = reverse * 10 + rem ;
    n = Math.floor(n / 10);
  }
  return reverse;
 
}
let ans = reverse_of_digits(687);
console.log(ans);

console.log(typeof(String(ans).split("").reverse().join("")))

