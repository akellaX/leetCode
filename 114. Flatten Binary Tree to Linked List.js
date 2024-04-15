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
 * @return {void} Do not return anything, modify root in-place instead.
 * time - O(n)
 * space - O(height)
 */
var flatten = function(root) {
    const checkNode = (node) => {
        if (!node) {
            return null;
        }
        const leftBranch = checkNode(node.left);
        const rightBranch = checkNode(node.right);
        if (leftBranch) {
            leftBranch.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        return rightBranch || leftBranch || node
    }

    checkNode(root);

};
