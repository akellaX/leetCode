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
 * @return {boolean}
 * time - O(n)
 * space - O(height)
 */
var isValidBST = function(root) {
    const isValid = (node, low, high) => {
        if (!node) {
            return true
        }
        if ((low !== undefined && low >= node.val) || (high != undefined && high <= node.val)) {
            return false;
        }

        return isValid(node.right, node.val, high) && isValid(node.left, low, node.val);
    }

    return isValid(root)
};
