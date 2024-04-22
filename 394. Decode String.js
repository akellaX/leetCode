/**
 * @param {string} s
 * @return {string}
 * Example 1:
 *
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * Example 2:
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * Example 3:
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 * time - O(maxK ^ countK * n),
 * space - O(maxK)
 */
var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }
        let curr = stack.pop();
        let str = '';
        while (curr !== '[') {
            str = curr + str;
            curr = stack.pop();
        }
        let num = stack.pop();
        let strNumber = '';
        while (!Number.isNaN(Number(num))) {
            strNumber = num + strNumber;
            num = stack.pop();
        }

        stack.push(num);
        stack.push(str.repeat(Number(strNumber)));
    }
    return stack.join('');
};
