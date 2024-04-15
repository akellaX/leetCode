/**
 * @param {number[][]} graph
 * @return {number[][]}
 *
 * Input: graph = [[1,2],[3],[3],[]]
 * Output: [[0,1,3],[0,2,3]]
 * Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 *
 * Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
 * Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
 *
 * time - O(2^n * n)
 * space - O(2^n * n)
 */
var allPathsSourceTarget = function (graph) {
    const target = graph.length - 1;
    const res = [];

    const dfs = (i, path) => {
        path.push(i);
        if (i === target) {
            res.push(path);
        }
        graph[i].forEach((el) => {
            dfs(el, [...path]);
        })
    }

    dfs(0, []);
    return res;
};
