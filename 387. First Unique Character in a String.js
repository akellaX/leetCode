/**
 * @param {string} s
 * @return {number}
 * time O(n)
 * space O(n)
 */
var firstUniqChar = function(s) {
    const dict = {};
    for (let i = 0; i < s.length; i++) {
        const symbol = s[i];
        if (dict[symbol]) {
            dict[symbol].push(i);
        } else {
            dict[symbol] = [i];
        }
    }
    let ans = Infinity;
    for (let key in dict) {
        const indexArrSize = dict[key].length;
        if (indexArrSize === 1) {
            ans = dict[key][0] < ans ? dict[key][0] : ans;
        }
    }

    return ans === Infinity ? -1 : ans;
};
