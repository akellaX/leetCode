/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = {val: 0, next: head};
    let left = dummy
    let right = dummy;
    for (let i = 1; i <= n + 1; i++) {
        right = right.next;
    }
    while (right) {
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dummy.next;
};
