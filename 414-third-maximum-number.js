// Date: 26-07-2025
// Problem: 414. Third Maximum Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = [...new Set(nums)];
  if (nums.length <= 2) {
    return Math.max(...nums);
  }
  nums.sort((a, b) => b - a);
  return nums[2];
};

console.log("hello")

