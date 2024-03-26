/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const res = new Array(isConnected.length).fill(null);
    isConnected.forEach((city, i) => {
        city.forEach((road, j) => {
            const val = res[i] === null ? i : res[i];
            if(road) {
                res[j] = val;
            }
        })
    })
    return new Set(res).size;
};
