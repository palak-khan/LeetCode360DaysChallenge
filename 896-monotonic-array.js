// Date: 27-07-2025
// Problem: 896. Monotonic Array

// Brute Force Approach
let arr = [1, 3, 2];
let inc = true;
let dec = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    dec = false;
  }
  if (arr[i] > arr[i + 1]) {
    inc = false;
  }
}
console.log(inc || dec);

// Optimized Approach 1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let inc = true;
  let dec = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      dec = false;
    }
    if (nums[i] > nums[i + 1]) {
      inc = false;
    }
    if (!inc && !dec) break;
  }
  return inc || dec;
};
isMonotonic([1, 3, 2]);

// Optimized Approach 2

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let inc = true,
    dec = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) dec = false;
    else if (nums[i] > nums[i + 1]) inc = false;
    if (!inc && !dec) break;
  }
  return inc || dec;
};

isMonotonic([1, 3, 2]);
isMonotonic([1, 2, 2, 3]);

// Optimized Approach 3 Runtime 0 ms 100% beats
var isMonotonic = function (nums) {
  let trend = 0; // 0=unknown, 1=increasing, -1=decreasing
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      if (trend === -1) return false;
      trend = 1;
    } else if (nums[i] > nums[i + 1]) {
      if (trend === 1) return false;
      trend = -1;
    }
  }
  return true;
};

isMonotonic([1, 2, 2, 3]);
