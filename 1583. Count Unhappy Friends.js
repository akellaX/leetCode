/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 * time - O(n)
 * space - O(n)
 */
var unhappyFriends = function(n, preferences, pairs) {
    const hashMap = {};
    let ans = 0;
    pairs.forEach(([i, j]) => {
        hashMap[i] = preferences[i].indexOf(j);
        hashMap[j] = preferences[j].indexOf(i);
    })

    for (let i = 0; i < n; i++) {
        const partner = hashMap[i];

        for(let j = 0; j < partner; j++) {
            const prefPart = preferences[i][j];
            if (preferences[prefPart].indexOf(i) < hashMap[prefPart]) {
                ans++;
                break;
            }
        }
    }

    return ans;
};
