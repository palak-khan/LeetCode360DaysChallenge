function sum_of_sqyares_natural_number(num) {
  return (num * (num + 1) * (2 * num + 1)) / 6;
}
function sum_of_sqyares_natural_number(num) {
  if (typeof num !== "number" || num <= 0) {
    console.warn("Wrong Input");
    return;
  }
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i * i;
  }
  console.log(sum);
}
console.log(sum_of_sqyares_natural_number(8));
