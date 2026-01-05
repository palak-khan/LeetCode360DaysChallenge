function closest_divisible(n, m) {
  let lower = Math.floor(n / m) * m; // 15 / 6 = 2.5 => 2 * 6 = 12
  let higher = Math.ceil(n / m) * m; // 15 / 6 = 2.5 => 3 * 6 = 18

  let distLower = Math.abs(n - lower); // 15 - 12 = 3
  let distHigher = Math.abs(higher - n); // 18 - 15 = 3

  if (distLower === distHigher) {
    return Math.abs(higher) > Math.abs(lower) ? higher : lower;// 18 > 12 ? higher : lower
  }

  return distLower < distHigher ? lower : higher;// 3 < 3 ? lower : higher 
}
let ans = closest_divisible(15, 6);
console.log(ans);
