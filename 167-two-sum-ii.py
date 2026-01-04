# Date: 1-11-2025
#  Problem: 167. Two Sum
#  Difficulty: Medium
# Beats 100% of JS submissions
# Complexity Analysis: O(n) time | O(1) space
# Two pointers approach
def twoSum(numbers, target):
    i = 0
    j = len(numbers) - 1
    while i < j:
        if numbers[i] + numbers[j] == target:
            return [i + 1, j + 1]
        elif numbers[i] + numbers[j] > target:
            j -= 1
        else:
            i += 1
    return []


twoSum([2, 7, 11, 15], 9)


        