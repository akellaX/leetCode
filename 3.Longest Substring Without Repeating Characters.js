var lengthOfLongestSubstring = function (str) {
    if (!str.length) {
        return 0;
    }
    let left = 0;
    let ans = 0;
    const dict = new Set();

    for (let i = 0; i < str.length; i++) {
        while (dict.has(str[i])) {
            dict.delete(str[left]);
            left++;
        }
        ans = Math.max(ans, i - left + 1);
        dict.add(str[i])
    }
    return ans;
};
