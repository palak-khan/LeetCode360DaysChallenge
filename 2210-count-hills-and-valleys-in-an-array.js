// Date: 27-07-2025
// Problem: 2210. Count Hills and Valleys in an Array

// brute force approach

let nums = [2, 2, 3, 3, 2, 2, 1];

let newArr = [];
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] != nums[i + 1]) {
    newArr.push(nums[i]);
  }
}
for (let i = 1; i < newArr.length - 1; i++) {
  if (newArr[i] > newArr[i - 1] && newArr[i] > newArr[i + 1]) {
    count++;
  } else if (newArr[i] < newArr[i - 1] && newArr[i] < newArr[i + 1]) {
    count++;
  }
}
console.log(newArr);
console.log(count);


Code

1-two-sum.py
// Optimized Approach