/**
 * @param {string[]} strs
 * @return {string[][]}
 * time - O(NKlogK)
 * space - O(NK)
 */
var groupAnagrams = function(strs) {
    const dict = {};
    strs.forEach((word) => {
        const sortedWord = word.split('').sort().join('');
        if (dict[sortedWord] === undefined) {
            dict[sortedWord] = [];
        }
        dict[sortedWord].push(word);
    })
    const ans = [];
    for (key in dict) {
        ans.push(dict[key]);
    }
    return ans;
};
