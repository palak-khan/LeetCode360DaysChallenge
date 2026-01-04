// Date: 29-09-2025
// Problem: 75. Sort Colors
// Dutch National Flag Algorithm/ 3 Pointers 100% beat
let low = 0;
let mid = 0;
let high = nums.length - 1;

while (mid <= high) {
  if (nums[mid] === 0) {
    [nums[low], nums[mid]] = [nums[mid], nums[low]];
    low++;
    mid++;
  } else if (nums[mid] === 1) {
    mid++;
  } else {
    [nums[mid], nums[high]] = [nums[high], nums[mid]];
    high--;
  }
}
return nums;
