/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const getSortedString = (str) => str.split('').sort().join('');
    return getSortedString(s) === getSortedString(t)
};

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const dict = {};
    let ans = true;
    for (let i = 0; i < t.length; i++) {
        const el = s[i];
        if (dict[el]) {
            dict[el]++;
        } else {
            dict[el] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!dict[t[i]]) {
            ans = false;
            break;
        } else {
            dict[t[i]] = dict[t[i]] - 1;
        }
    }
    return ans;
};
