/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * time - O(amount * coins.length)
 * space - O(amount)
 */
var coinChange = function(coins, amount) {
    const resultArr = new Array(amount + 1).fill(Infinity);
    resultArr[0] = 0;
    coins.forEach((coin) => {
        for (let i = coin; i <= amount; i++) {
            resultArr[i] = Math.min(resultArr[i], resultArr[i-coin] + 1);
        }
    })
    return resultArr[amount] === Infinity ? -1 : resultArr[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const resultArr = new Array(amount + 1).fill(-1);
    resultArr[0] = 0;
    resultArr.forEach((el, i) => {
        if (el >= 0) {
            coins.forEach((coin) => {
                const val = i + coin;
                if (val <= amount) {
                    const count = resultArr[val];
                    resultArr[val] = count === -1 ? resultArr[i] + 1 : Math.min(count, resultArr[i] + 1)
                }
            })
        }
    })
    return resultArr[resultArr.length-1];
};
