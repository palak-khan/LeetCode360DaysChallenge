function sum_of_natural_number(num) {
  if (typeof num !== "number" || num <= 0) {
    console.warn("Wrong Input");
    return;
  }
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}
sum_of_natural_number(0);
