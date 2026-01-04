// Date: 09-12-2025
// Problem: 33. Search in Rotated Sorted Array
// Difficulty: Medium

var search = function (nums, target) {
  console.log("one");
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return console.log(mid);

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return console.log(-1);
};

var search = function (nums, target) {
  console.log("two");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return console.log(i);
    }
  }
  return console.log(-1);
};
search([4, 5, 6, 7, 0, 1, 2], 0);


