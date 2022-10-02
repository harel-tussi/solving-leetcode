// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const lettersCount = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    lettersCount[s[i].charCodeAt() - 97]++;
    lettersCount[t[i].charCodeAt() - 97]--;
  }
  for (let i = 0; i < lettersCount.length; i++) {
    if (lettersCount[i] !== 0) return false;
  }
  return true;
};
