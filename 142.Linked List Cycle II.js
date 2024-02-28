/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * time = O(n) space = O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head, i) {
    if (head) {
        if(head.i !== undefined) {
            return head;
        }
        head.i = i === undefined ? 0 : i;
        return detectCycle(head.next, head.i + 1);
    }
    return null;
};

/**
 * BETTER
 * time = O(n) space = O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let hasCycle = false
    while (fast && slow) {
        fast = fast.next?.next
        slow = slow.next;
        if (fast === slow) {
            hasCycle = true
            break;
        }
    }
    if (hasCycle) {
        slow = head;
        while (fast !== slow) {
            fast = fast.next;
            slow = slow.next
        }
        return slow;
    }

    return null
}
