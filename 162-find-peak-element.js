// Date: 30-07-2025
// Problem: 162. Find Peak Element

var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return -1;
};
