/**
 * @param {number[]} height
 * @return {number}
 * time - O(n)
 * space - 0(1)
 */
var trap = function(height) {
    let ans = 0;
    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[0];
    let maxRight = height[right]

    while (left < right) {
        if (maxLeft <= maxRight) {
            left++;
            if (maxLeft >= height[left]) {
                ans+= maxLeft - height[left];
            } else {
                maxLeft = height[left]
            }
        } else {
            right--;
            if (maxRight >= height[right]) {
                ans+= maxRight - height[right];
            } else {
                maxRight = height[right]
            }
        }
    }

    return ans;
};
