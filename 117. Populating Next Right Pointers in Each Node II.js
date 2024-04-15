/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }

    let curr = root;
    let next = curr.left || curr.right;

    while (curr && next) {
        if (curr.left && curr.right) {
            curr.left.next = curr.right
        }
        if (curr.next) {
            const leftbr = curr.right || curr.left;
            const rightbr = curr.next.left || curr.next.right;
            leftbr.next = rightbr;
        }
        if (!curr.next) {
            curr = next;
            next = curr.left || curr.right;
        } else {
            curr = curr.next;
            if (!next) {
                next = curr.left || curr.right
            }
        }
    }
    return root;
};
