/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) {
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    let isPal = true;
    while (left < right) {
        while (!/[a-zA-Z0-9]/.test(s[left]) && left < s.length) {
            left++
        }
        while (!/[[a-zA-Z0-9]/.test(s[right]) && right > 0) {
            right--
        }
        if (right > 0 && left < s.length && s[left].toLowerCase() !== s[right].toLowerCase()) {
            isPal = false;
            break;
        }
        left++;
        right--
    }
    return isPal;
};
