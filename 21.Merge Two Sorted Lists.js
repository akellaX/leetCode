/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let ans = null;
    if (list1 && list2) {
        if (list1.val <= list2.val) {
            ans = {
                val: list1.val,
                next: mergeTwoLists(list1.next, list2)
            }
        } else {
            ans = {
                val: list2.val,
                next: mergeTwoLists(list1, list2.next)
            }
        }
    } else if (list1 || list2) {
        ans = list1 ?? list2;
    } else {
        ans = null;
    }
    return ans;
};
