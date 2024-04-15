/**
 * @param {string} digits
 * @return {string[]}
 * time - O(3^n * 4^m)
 * space - O(3^n * 4^m)
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return []
    }
    const res = [];
    const keyboard = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    const step = (charIndex, path = []) => {
        if (charIndex === digits.length) {
            res.push(path.join(''));
            return
        }

        const letter = digits[charIndex];
        const letters = keyboard[letter];
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i]);
            step(charIndex + 1, path);
            path.pop();
        }
    }

    step(0);
    return res;
};
