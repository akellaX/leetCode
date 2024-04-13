/**
 * @param {character[]} chars
 * @return {number}
 * time - O(n)
 * space - O(1)
 */
var compress = function(chars) {
    let i = 0;
    let len = 0;
    while (len < chars.length) {
        const currSymb = chars[len];
        chars[i] = currSymb;
        i++;
        let counter = 0;
        while (chars[len] === currSymb) {
            counter++;
            len++;
        }
        if (counter !== 1) {
            String(counter).split('').forEach(num => {
                chars[i++] = num;
            })
        }
    }
    return i;
};
