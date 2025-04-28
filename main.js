//1: Running Sum of 1D Array
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// let nums = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   nums[i] = sum + nums[i];
//   sum = nums[i];
// }
// console.log(nums);

//2: Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// let phrase = "A man, a plan, a canal: Panama";
// phrase = phrase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
// console.log(phrase)
// let phraseReverse = phrase.split('').reverse().join('')
// console.log(phraseReverse)
// if(phrase === phraseReverse){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Maximum Average Subarray I
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findMaxAverage = function(nums, k) {
//     let sum = 0;

//     for (let i = 0; i < k; i++) {
//         sum += nums[i];
//     }

//     let maxSum = sum;

//     for (let i = k; i < nums.length; i++) {
//         sum = sum - nums[i - k] + nums[i];
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum / k;
// };
