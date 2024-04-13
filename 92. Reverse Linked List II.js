/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let leftNode = head;
    let rightNode = head;
    let i = 1;
    while (i !== right + 1) {
        if (i !== left - 1) {
            leftNode = leftNode.next;
        }
        if (i === right) {
            const curr = rightNode;
            rightNode = rightNode.next;
            curr.next = null;
        } else {
            rightNode = rightNode.next;
        }
    }
    const newNode = reverse(leftNode.next);
    leftNode.next = newNode;
};


const reverse = (head) => {
    if (!head || !head.next) {
        return head;
    }

    const p = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
