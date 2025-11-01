// # Date: 1-11-2025
// #  Problem: 167. Two Sum-II - Input Array Is Sorted
// #  Difficulty: Medium
// Beats 100% of JS submissions
// Complexity Analysis: O(n) time | O(1) space
// Two pointers approach
var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};
twoSum([2, 7, 11, 15], 9);
