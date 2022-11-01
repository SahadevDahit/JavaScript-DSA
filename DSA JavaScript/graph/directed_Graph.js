//Detect Cycle , Topological Sort

let graph = {};

function addNode(node) {
    if (!graph[node]) {
        graph[node] = [];
    }
}

function addEdge(v1, v2) {
    if (!graph[v1].includes(v2)) {
        graph[v1].push(v2);
    }
}

function detectCycle() {
    let visited = {};
    let recStack = {};
    let keys = Object.keys(graph);
    for (let key of keys) {
        if (detect_dfs(key, visited, recStack)) return true;
    }
    return false
}

function detect_dfs(node, visited, recStack) {
    visited[node] = true;
    recStack[node] = true;

    for (let adj of graph[node]) {
        if (!visited[adj]) {
            if (detect_dfs(adj, visited, recStack)) return true;
        } else if (recStack[adj]) {
            return true;
        }
    }
    recStack[node] = false;
    return false;

}

//topologicalSort is only valid for the Acyclic directed graph
function topologicalSort() {
    if (!detectCycle()) {
        let visited = {};
        let stack = [];
        let keys = Object.keys(graph);
        for (let key of keys) {
            if (!visited[key]) {
                if (topo_dfs(key, visited, stack)) return true;
            }

        }
        console.log(...stack.reverse());
    } else {
        console.log("Not a Acyclic directed graph")
    }
}

function topo_dfs(key, visited, stack) {
    visited[key] = true;
    for (let adj of graph[key]) {
        if (!visited[adj]) {
            topo_dfs(adj, visited, stack)
        }
    }
    stack.push(key);
}

//topological Sort using bfs
function topologicalSort1() {
    let in_degree = new Map();
    let keys = Object.keys(graph);
    for (let key of keys) {
        in_degree.set(key, 0)

    }
    console.log(in_degree)
}




/* Adding nodes to the graph. */
addNode(0);
addNode(1);
addNode(2);
addNode(3);
addNode(4);

/* Adding edges to the graph. */
addEdge(0, 2);
addEdge(2, 3);
addEdge(3, 4);
addEdge(4, 1);
addEdge(1, 0)

// console.log(detectCycle());
topologicalSort()
topologicalSort1();