/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * time - O (n + m)
 * space - O(1)
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB) {
        pA = !pA ? headB : pA.next;
        pB = !pB ? headA : pB.next;
    }
    return pA;
};
