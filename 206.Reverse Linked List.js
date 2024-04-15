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
 * time - O(n)
 * space - O(n)
 */
var reverseList = function (head) {
    if(!head || !head.next) {
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
