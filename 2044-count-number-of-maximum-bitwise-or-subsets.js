// Date: 28-07-2025
// Problem: 2044. Count Number of Maximum Bitwise OR Subsets


var countMaxOrSubsets = function (nums) {
  let maxOR = 0;
  for (let num of nums) {
    maxOR |= num;
  }

  const backtrack = (index, currentOR) => {
    if (index === nums.length) {
      return currentOR === maxOR ? 1 : 0;
    }

    if (currentOR === maxOR) {
      return 1 << (nums.length - index);
    }

    return (
      backtrack(index + 1, currentOR | nums[index]) +
      backtrack(index + 1, currentOR)
    );
  };

  return backtrack(0, 0);
};

countMaxOrSubsets([3, 1, 5, 7]);
