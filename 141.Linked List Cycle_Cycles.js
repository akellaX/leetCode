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
var hasCycle = function(firstPointer, secondPointer) {
    let first = firstPointer;
    let second = secondPointer ?? firstPointer?.next?.next;
    while(second && first) {
        if (second.next === first.next) {
            return true;
        }
        return hasCycle(first.next, second.next?.next)
    }
    return false;
};

/**
 * WORST BUT WITHOUT RECURSION
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && slow) {
        fast = fast.next?.next
        slow = slow.next;
        if (fast === slow) {
            return true
        }
    }

    return false
}
