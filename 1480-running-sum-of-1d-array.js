// Date: 28-09-2025
// Problem: 1480. Running Sum of 1d Array
// bruteforce approach 100% beat

var runningSum = function (nums) {
  let sum = 0;
  let arr = nums.map((num) => (sum += num));
  return arr;
};
runningSum([1, 2, 3, 4]);
    s