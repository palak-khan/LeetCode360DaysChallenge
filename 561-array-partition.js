// Date: 27-07-2025
// Problem: 561. Array Partition

//First approach
let nums = [1, 4, 3, 2];
nums.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < nums.length; i += 2) {
  let pair = [nums[i], nums[i + 1]];
  sum += Math.min(...pair);
}

// Second approach

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};
arrayPairSum([1, 4, 3, 2]);
