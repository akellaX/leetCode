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
 * @return {number[][]}
 * time - O(n)
 * space - O(n)
 */
var verticalOrder = function(root) {
    if (!root) {
        return [];
    }

    const map = {};
    const queue = [[root, 0]];
    let min = Infinity;

    while (queue.length > 0) {
        const [node, i] = queue.shift();
        if (map[i]) {
            map[i].push(node.val)
        } else {
            map[i] = [node.val]
        }
        min = Math.min(min, i);
        if (node.left) {
            queue.push([node.left, i - 1])
        }
        if (node.right) {
            queue.push([node.right, i + 1])
        }
    }

    const res = [];
    while (map[min] !== undefined) {
        res.push(map[min++])
    }
    return res;
};
