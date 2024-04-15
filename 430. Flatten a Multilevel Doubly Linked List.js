/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
var flatten = function(head) {
    if (!head) {
        return head;
    }
    const dummy = {
        next: head,
        val: 0
    }

    const dfs = (prev, curr) => {
        if (!curr) {
            return prev;
        }
        curr.prev = prev;
        prev.next = curr;

        const tempNext = curr.next;
        const tail = dfs(curr, curr.child);
        curr.child = null;
        return dfs(tail, tempNext);
    }

    dfs(dummy, head);
    head.prev = null;
    return dummy.next;

};
