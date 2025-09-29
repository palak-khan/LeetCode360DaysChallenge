// Date: 29-09-2025
// Problem: 75. Sort Colors
// Two-pointer approach

var sortColors = function (nums) {
  nums.sort((a, b) => a - b);
  return nums;
};

sortColors([2, 0, 2, 1, 1, 0]);