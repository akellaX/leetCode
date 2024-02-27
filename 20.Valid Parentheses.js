/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const closeBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const resultArr = [];
    for ( let i = 0; i < s.length; i++) {
        if (closeBrackets[s[i]]) {
            const lastBr = resultArr.pop();
            if (lastBr !== closeBrackets[s[i]]) {
                return false
            }
        } else {
            resultArr.push(s[i]);
        }
    }
    return resultArr.length === 0
};
