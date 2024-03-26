/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjacencyList = new Array(n).fill().map(() => []);
    edges.forEach(([e1, e2]) => {
        adjacencyList[e1].push(e2);
        adjacencyList[e2].push(e1);
    });

    const visited = new Set();
    const stack = [source];
    visited.add(source);

    while (stack.length > 0) {
        const current = stack.pop();
        if (current === destination) return true;
        for (const neighbor of adjacencyList[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return false;
};

// --------

var validPath = function(n, edges, source, destination) {
    const vertexMap = {};
    const visited = new Set();
    edges.forEach(([e1,e2]) => {
        if (vertexMap[e1]) {
            vertexMap[e1].push(e2);
        } else {
            vertexMap[e1] = [e2];
        }
        if (vertexMap[e2]) {
            vertexMap[e2].push(e1);
        } else {
            vertexMap[e2] = [e1];
        }
    })

    const dfs = (start) => {
        visited.add(start);
        const closeVerArr = vertexMap[start];
        if (closeVerArr) {
            closeVerArr.forEach((val) => {
                if (!visited.has(val)) {
                    dfs(val);
                }
            })
        }
    }

    dfs(source);
    return visited.has(destination)
};

