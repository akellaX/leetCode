/**
 * @param {string[]} transactions
 * @return {string[]}
 * Example 1:
 *
 * time - O(n^2)
 * space - O(n)
 */
var invalidTransactions = function(transactions) {
    const map = {};
    const res = [];

    const isInvalid = (trans) => {
        const [name, time, price, city] = trans.split(',');
        if (price > 1000) {
            return true;
        }
        const prevTrans = map[name];

        for(let i = 0; i < prevTrans.length; i++) {
            const prev = prevTrans[i];
            if (prev[1] === city) continue;
            if(Math.abs(prev[0] - time) > 60) continue;

            return true;

        }
        return false;
    }

    transactions.forEach(trans => {
        const [name, time, _, city] = trans.split(',');
        if (map[name]) {
            map[name].push([time, city]);
        } else {
            map[name] = [[time, city]];
        }
    })

    transactions.forEach(trans => {
        if (isInvalid(trans)) {
            res.push(trans)
        }
    })

    return res
};
