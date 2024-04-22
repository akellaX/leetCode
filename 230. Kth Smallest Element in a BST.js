/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * time O(n)
 * space O(n)
 */
var kthSmallest = function(root, k) {
    const stack = [];
    let n = 0;
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        n++;
        current = stack.pop();
        if (n === k) {
            return current.val;
        }
        current = current.right;
    }

};
