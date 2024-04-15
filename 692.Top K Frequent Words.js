/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * Input: words = ["i","love","leetcode","i","love","coding"], k = 2
 * Output: ["i","love"]
 * time - O(n logn)
 * space - O(n)
 */
var topKFrequent = function(words, k) {
    const dict = {};
    const res = [];
    words.forEach(word => {
        if (!dict[word]) {
            dict[word] = 1;
        } else {
            dict[word] = dict[word] + 1;
        }
    })
    const sortedDict = Object.keys(dict).map(key => [key, dict[key]]).sort((a, b) => {
        if (b[1] === a[1] ) {
            return a[0].localeCompare(b[0])
        } else {
            return b[1] - a[1]
        }
    });
    for (let i = 0; i < k ; i++) {
        res.push(sortedDict[i][0]);
    }
    return res;
};
