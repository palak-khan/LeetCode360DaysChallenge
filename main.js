//1: Running Sum of 1D Array
let nums = [1,2,3,4,5]
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  nums[i] = sum + nums[i];
  sum = nums[i];
}
console.log(nums);