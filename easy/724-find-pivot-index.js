/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((s, n) => s + n, 0);
  let left = 0;
  for (i = 0; i < nums.length; i++) {
    if (left === sum - nums[i] - left) return i;
    left += nums[i];
  }
  return -1;
};
