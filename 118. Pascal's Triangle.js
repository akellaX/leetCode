/**
 * @param {number} numRows
 * @return {number[][]}
 * time - O(n^2)
 * space - O(1)
 */
var generate = function(numRows) {
    let rows = 1;
    const triangle = [[1]];
    while (numRows > rows) {
        rows++;
        const newRow = new Array(rows).fill(0);
        newRow.forEach((el, i) => {
            if (i === 0 || i === newRow.length - 1) {
                newRow[i] = 1;
            } else {
                const lastRow = triangle[triangle.length-1];
                newRow[i] = lastRow[i - 1] + lastRow[i];
            }
        })
        triangle.push(newRow);
    }
    return triangle;
};
