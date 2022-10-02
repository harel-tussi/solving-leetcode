/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  // Output: 6
  // Explanation: [4,-1,2,1] has the largest sum = 6.
  let sum = nums[0];
  let max = sum;
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    sum = Math.max(curr, sum + curr);
    max = Math.max(max, sum);
  }
  return max;
};
