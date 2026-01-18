function fibonacci_number(n) {
  if (typeof n !== "number" || n < 0) {
    return console.log("wrong Input");
  }
  const arr = [];
  let sum = 0;
  let a = 0;
  let b = 1;
  arr[0] = a;
  arr[1] = b;

  if(n === 1){
    return 2
  }

  for (let i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
    arr.push(sum);
    if (n == i) {
      return sum;
    }
  }
}
console.log(fibonacci_number(2));
