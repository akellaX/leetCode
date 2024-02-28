/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * [[1,4],[2,3]]
 */
var merge = function(intervals) {
    const res = [];
    intervals.sort((a,b) => a[0] - b[0]);
    let left = intervals[0][0];
    let right = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][1] <= right) {
            continue;
        }
        if (intervals[i][0] <= right) {
            right = intervals[i][1];
        } else {
            res.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        }
    }
    res.push([left, right]);
    return res;
};
