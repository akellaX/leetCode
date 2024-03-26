/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * complexity
 * time - O(n)
 * space - O(1)
 */
var isPalindrome = function(head) {
    if (head.next === null) {
        return true
    }
    let listLen = 0;
    let newHead = head;
    while (newHead) {
        listLen++;
        newHead = newHead.next;
    }
    const isEven = listLen % 2 === 0;
    const endOfFirstList = isEven ? listLen / 2 - 1 : Math.floor(listLen / 2) - 1;

    let i = 0;
    let startOfSecondList;
    newHead = head;
    while (true) {
        if (endOfFirstList === i) {
            startOfSecondList = isEven ? newHead.next : newHead.next.next
            newHead.next = null;
            break;
        }
        i++;
        newHead = newHead.next;
    }
    startOfSecondList = reverseList(startOfSecondList);
    while (head && startOfSecondList) {
        if (head.val !== startOfSecondList.val) {
            return false;
        }
        head = head.next;
        startOfSecondList = startOfSecondList.next;
    }
    return head === null && startOfSecondList === null
};

var reverseList = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
