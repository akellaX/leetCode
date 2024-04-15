/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time - O(n)
 * space - O(n)
 */
var twoSum = function(nums, target) {
    const dict = {};
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (dict[target - nums[i]] !== undefined) {
            ans.push(dict[target - nums[i]]);
            ans.push(i)
            break;
        }
        dict[nums[i]] = i;
    }
    return ans;
};
