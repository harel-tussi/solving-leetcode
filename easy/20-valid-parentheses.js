/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const prs = s[i];
    if (["(", "[", "{"].includes(prs)) {
      stack.push(prs);
    } else {
      const matchingPrs = stack.pop();
      if (prs === "}" && matchingPrs !== "{") return false;
      if (prs === "]" && matchingPrs !== "[") return false;
      if (prs === ")" && matchingPrs !== "(") return false;
    }
  }
  return stack.length === 0;
};
