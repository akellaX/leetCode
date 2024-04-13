// time O(m*n)
// space O(m*n)

var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    const res = [];
    const size = matrix.length * matrix[0].length;

    while (res.length < size) {
        for (let i = left; i <= right && res.length < size; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && res.length < size; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && res.length < size; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) {
            break;
        }
        for (let i = bottom; i >= top && res.length < size; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
}
