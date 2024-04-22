/**
 * @param {number[][]} costs
 * @return {number}
 * time - O(nlogn)
 * space - O(n)
 */
var twoCitySchedCost = function(costs) {
    let res = 0;
    costs.sort((a, b) => {
        return (a[0] - a[1]) - (b[0] - b[1]);
    })

    for (let i = 0; i < Math.floor(costs.length / 2); i++) {
        res+= costs[i][0] + costs[costs.length - i - 1][1];
    }

    return res;
};
