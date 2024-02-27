/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} target
 * @return {number[][]}
 */
function twoSum(nums, start, target) {
    const result = [];
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target || (left > start && nums[left] === nums[left - 1])) {
            left++;
        } else if (sum > target || (right < nums.length - 1 && nums[right] === nums[right + 1])) {
            right--;
        } else {
            result.push([nums[left], nums[right]]);
            left++;
            right--;
        }
    }

    return result;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            const target = -nums[i];
            const twoSumResults = twoSum(nums, i + 1, target);
            for (const pair of twoSumResults) {
                ans.push([nums[i], ...pair]);
            }
        }
    }

    return ans;
}

_____________________________________________
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let result = [];

    nums.forEach((num, i) => {
        if(num <= 0 && num !== nums[i-1]) {
            let l = i+1;
            let r = nums.length-1;
            while(l < r) {
                const threeSum = num + nums[l] + nums[r];
                if(threeSum > 0) {
                    r--;
                }
                else if(threeSum < 0) {
                    l++;
                }
                else {
                    result.push([num, nums[l], nums[r]]);
                    l++;
                    r--;
                    while(nums[l] === nums[l-1] && l < r) {
                        l++;
                    }
                }
            }
        }
    });
    return result;
};
