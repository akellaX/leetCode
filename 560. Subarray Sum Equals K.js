/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const hashMap = {
        0: 1,
    };
    let count = 0;
    let sum = 0;
    nums.forEach(el => {
        sum+= el;
        const numberForSearch = sum - k;
        if (hashMap[numberForSearch] !== undefined) {
            count+= hashMap[numberForSearch];
        }
        if (hashMap[sum] !== undefined) {
            hashMap[sum]++;
        } else {
            hashMap[sum] = 1;
        }
    })
    return count;
};
