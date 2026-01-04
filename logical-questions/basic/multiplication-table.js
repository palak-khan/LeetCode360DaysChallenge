function multiplication(num) {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    console.log(typeof num);
    console.warn("Wrong Input");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
multiplication(5);