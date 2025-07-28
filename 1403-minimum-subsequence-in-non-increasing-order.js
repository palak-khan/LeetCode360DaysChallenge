// Date: 28-07-2025
// Problem: 1403. Minimum Subsequence in Non-Increasing Order

// Brute Force Approach
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let totalSum = nums.reduce((a, b) => a + b, 0);

  let selected = [];
  let selectedSum = 0;

  for (let num of nums) {
    selected.push(num);
    selectedSum += num;
    if (selectedSum > totalSum - selectedSum) {
      break;
    }
  }

  return selected;
};

minSubsequence([4, 3, 10, 9, 8]);

// Optimized Approach
