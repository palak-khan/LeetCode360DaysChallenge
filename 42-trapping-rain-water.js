// Date: 3-11-2025
//  Problem: 42. Trapping Rain Water
//  Difficulty: Hard
// Beats 100% of JS submissions
// Complexity Analysis: O(n) time | O(n) space

var trap = function (height) {
  let n = height.length;
  let leftMax = getLeftMaxArr(height, n);
  let rightMax = getRightMaxArr(height, n);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let trapWater = Math.min(leftMax[i], rightMax[i]) - height[i];
    if (trapWater > 0) {
      sum += trapWater;
    }
  }
  return sum;
};
var getLeftMaxArr = function (height, n) {
  let leftMax = new Array(n);
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  return leftMax;
};

var getRightMaxArr = function (height, n) {
  let rightMax = new Array(n);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  return rightMax;
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
