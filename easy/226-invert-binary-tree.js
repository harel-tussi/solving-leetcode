/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const invert = (node) => {
    if (!node) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    node.left && invert(node.left);
    node.right && invert(node.right);
  };
  invert(root);
  return root;
};
