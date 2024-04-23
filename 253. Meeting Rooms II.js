/**
 * @param {number[][]} intervals
 * @return {number}
 * time O(nlogn)
 * space O(n)
 */
var minMeetingRooms = function(intervals) {
    let ans = 0;
    const starts = intervals.sort((a,b) => a[0] - b[0]).map(a => a[0]);
    const ends = intervals.sort((a,b) => a[1] - b[1]).map(a => a[1]);

    let i = 0;
    starts.forEach(start => {
        if (start < ends[i]) {
            ans++;
        } else {
            i++;
        }
    })

    return ans;
};
