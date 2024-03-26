/**
 * @param {string[][]} tickets
 * @return {string[]}
 * Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * Output: ["JFK","MUC","LHR","SFO","SJC"]
 *
 * Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
 */
var findItinerary = function(tickets) {
    const ticketsMap = {};
    tickets.forEach(([from, to]) => {
        if (!ticketsMap[from]) {
            ticketsMap[from] = [to];
        } else {
            ticketsMap[from].push(to)
        }
    })
    for(tickets in ticketsMap) {
        ticketsMap[tickets] = ticketsMap[tickets].sort();
    }
    const res = [];
    const dfs = (node, visited = []) => {
        visited.push(node);
        const nextAirports = ticketsMap[node];
        if (nextAirports?.length > 0) {
            nextAirports.forEach(air => {
                dfs(air, [...visited]);
            })
        } else {
            res.push(visited);
        }
    }
    dfs('JFK');
    return res
};
