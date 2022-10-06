// basic recursion
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsRecursion = function (n) {
  const climb = (curr, n) => {
    if (curr === n) return 1;
    if (curr > n) return 0;
    return climb(curr + 1, n) + climb(curr + 2, n);
  };
  return climb(0, n);
};

// with stack
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsStack = function (n) {
  const stack = [0];
  let count = 0;
  while (stack.length) {
    const item = stack.pop();
    if (item === n) count++;
    if (item < n) {
      item + 1 <= n && stack.push(item + 1);
      item + 2 <= n && stack.push(item + 2);
    }
  }
  return count;
};

// with dp
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsStack = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n - 1];
};
