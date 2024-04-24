// time - O(n^2 * m^2)
// space - O(1)
function candyCrush(board) {
    let isDone = true;
    let m = board.length, n = board[0].length;

    // Step 1: Mark candies to crush
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0) continue;

            // Check for horizontal triples
            if (j < n - 2 && Math.abs(board[i][j]) == Math.abs(board[i][j + 1]) && Math.abs(board[i][j]) == Math.abs(board[i][j + 2])) {
                board[i][j] = board[i][j + 1] = board[i][j + 2] = -Math.abs(board[i][j]);
                isDone = false;
            }

            // Check for vertical triples
            if (i < m - 2 && Math.abs(board[i][j]) == Math.abs(board[i + 1][j]) && Math.abs(board[i][j]) == Math.abs(board[i + 2][j])) {
                board[i][j] = board[i + 1][j] = board[i + 2][j] = -Math.abs(board[i][j]);
                isDone = false;
            }
        }
    }

    // Step 2: Crush the candies, make them zero
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] < 0) {
                board[i][j] = 0;
            }
        }
    }

    // Step 3: Let the candies fall down
    for (let j = 0; j < n; j++) {
        let idx = m - 1;
        for (let i = m - 1; i >= 0; i--) {
            if (board[i][j] > 0) {
                board[idx][j] = board[i][j];
                idx--;
            }
        }
        while (idx >= 0) {
            board[idx][j] = 0;
            idx--;
        }
    }

    // If not done, recurse
    return isDone ? board : candyCrush(board);
}
