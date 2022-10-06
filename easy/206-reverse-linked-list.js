// recursive
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const recurse = (head, reversed) => {
    if (!head) return reversed;
    const curr = head;
    head = head.next;
    curr.next = reversed;
    reversed = curr;
    return recurse(head, reversed);
  };
  return recurse(head, null);
};

// iterative
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reversed = null;
  while (head) {
    let curr = head;
    head = head.next;
    curr.next = reversed;
    reversed = curr;
  }
  return reversed;
};
