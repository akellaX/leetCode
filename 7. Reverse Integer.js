/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numberStr = String(x);
    let isNegative = false;
    if (numberStr[0] === '-') {
        isNegative = true;
        numberStr = numberStr.slice(1)
    }
    const reversedNumber = numberStr.split('').reverse().join('');
    if (reversedNumber >= Math.pow(2,31)) {
        return 0;
    }

    return (isNegative ? -1 : 1) * reversedNumber
};
