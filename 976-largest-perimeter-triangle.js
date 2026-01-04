// Date: 28-09-2025
// Problem: 976. Largest Perimeter Triangle
// bruteforce approach 66% beat

var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length - 2; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    let c = nums[i + 2];

    if (b + c > a) {
      return a + b + c;
    }
  }
  return 0;
};
largestPerimeter([3, 6, 2, 3]);
