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
 * @return {number}
 * time -O(n)
 * space - O(n)
 */
var diameterOfBinaryTree = function(root) {
    let ans = -Infinity;
    const dfs = (node, counter = 0) => {
        if (!node) {
            return 0;
        }

        const leftbr = dfs(node.left, counter);
        const rightbr = dfs(node.right, counter);

        ans = Math.max(leftbr + rightbr, ans);

        return Math.max(leftbr, rightbr) + 1;
    }

    dfs(root)

    return ans;
};
