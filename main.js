//1: Running Sum of 1D Array
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
let nums = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  nums[i] = sum + nums[i];
  sum = nums[i];
}
console.log(nums);
