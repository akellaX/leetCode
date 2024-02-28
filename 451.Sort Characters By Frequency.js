/**
 * @param {string} s
 * @return {string}
 * Input: s = "tree"
 * Output: "eert"
 */
var frequencySort = function(s) {
    const dict = {};
    for (let i = 0; i < s.length; i++) {
        const symb = s[i];
        if (!dict[symb]) {
            dict[symb] = 1;
        } else {
            dict[symb] = dict[symb] + 1;
        }
    }
    const arr = Object.keys(dict).map(key => [key, dict[key]])
    arr.sort((a, b) => b[1] - a[1]);
    return arr.reduce((acc, currentValue) => {
        for (let i = 0; i < currentValue[1]; i++) {
            acc+= currentValue[0]
        }
        return acc
    }, '')
};
