/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * time - O(m * n * 4^wordLen)
 * space - O(wordLen)
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;

    const step = (i, j, chIndex) => {
        if (chIndex === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || word[chIndex] !== board[i][j]) {
            return false
        }

        const temp = board[i][j];
        board[i][j] = '-';

        const result = step(i + 1, j, chIndex + 1) ||
            step(i - 1, j, chIndex + 1) ||
            step(i, j + 1, chIndex + 1) ||
            step(i, j - 1, chIndex + 1);

        board[i][j] = temp;

        return result;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (step(i, j, 0)) {
                return true
            }
        }
    }

    return false;
};
