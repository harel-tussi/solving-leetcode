/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    } else {
      slow = slow.next;
    }
  }
  return false;
};
