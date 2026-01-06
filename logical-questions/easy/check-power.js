function check_power(x, y) {
  if (y < 1) return false;
  if (y === 1) return true;

  while (y % x === 0) {
    y = y / x;
  }

  return y === 1;
}

console.log(check_power(1, 4));

