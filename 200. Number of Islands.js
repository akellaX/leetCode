/**
 * Example 1:
 *
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * Example 2:
 *
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 * @param {character[][]} grid
 * @return {number}
 * time - O(m*n)
 * space - O(m*n)
 */
var numIslands = function (grid) {
    const visitedArr = Array(grid.length).fill().map(() => Array(grid[0].length).fill(0));
    let ans = 0;

    const checkEl = (i, j) => {
        visitedArr[i][j] = 1;

        const topEl = grid[i - 1]?.[j];
        const bottomEl = grid[i + 1]?.[j]
        const leftEl = grid[i][j - 1];
        const rightEl = grid[i][j + 1];

        if (Number(topEl) && !visitedArr[i-1][j]) {
            checkEl(i - 1, j);
        }
        if (Number(bottomEl) && !visitedArr[i+1][j]) {
            checkEl(i + 1, j);
        }
        if (Number(leftEl) && !visitedArr[i][j - 1]) {
            checkEl(i, j - 1);
        }
        if (Number(rightEl) && !visitedArr[i][j + 1]) {
            checkEl(i, j + 1);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visitedArr[i][j] && Number(grid[i][j])) {
                checkEl(i, j);
                ans++;
            }
        }
    }

    return ans;
};
