// https://leetcode.com/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const saved = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const pair = target - current;
    if (saved[pair] !== undefined) {
      return [saved[pair], i];
    } else {
      saved[current] = i;
    }
  }
};
