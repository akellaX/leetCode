/**
 * @param {string[]} words
 * @return {string}
 * time - O(V + E)
 * space - O(V + E)
 */
var alienOrder = function(words) {
    const adj = {};
    const visited= {};
    words.forEach(word => {
        word.split('').forEach(ch => {
            if (!adj[ch]) {
                adj[ch] = new Set();
                visited[ch] = 0;
            }
        })
    })

    for(let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);
        let sameWord = true;

        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].add(w2[j]);
                sameWord = false;
                break;
            }
        }
        if (sameWord && w1.length > w2.length) {
            return '';
        }
    }

    const res = [];

    const dfs = (node) => {
        if (visited[node]) {
            if (visited[node] === 1) {
                return false;
            }
            if (visited[node] === 2) {
                return true;
            }
        }

        visited[node] = 1;
        for (let neighbors of adj[node]) {
            if (!dfs(neighbors)) {
                return false
            }
        }
        visited[node] = 2;
        res.push(node);
        return true;
    }

    for(let key in adj) {
        if (!dfs(key)) {
            return '';
        }
    }
    return res.reverse().join('');
};
