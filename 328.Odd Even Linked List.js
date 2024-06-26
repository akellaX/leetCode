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
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
var oddEvenList = function(head) {
    if (!head?.next) {
        return head
    }
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(even.next) {
        odd.next = even.next
        odd = odd.next
        if (odd.next) {
            even.next = odd.next;
            even = even.next;
        } else {
            even.next = null
        }
    }
    odd.next = evenHead;
    return head;
};
