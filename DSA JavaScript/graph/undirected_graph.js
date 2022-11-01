let graph = {};

function addNode(node) {
    if (!graph[node]) {
        graph[node] = [];
    } else {
        console.log("Node already exists");
    }
}

function addEdge(v1, v2) {
    if (!graph[v1].includes(v2)) {
        graph[v1].push(v2);
    }
    if (!graph[v2].includes(v1)) {
        graph[v2].push(v1);
    }

}

function removeNode(node) {
    if (node) {
        graph[node].map(value => {
            graph[value] = graph[value].filter(item => item != node);
        })
        delete graph[node];
    } else {
        console.log("Node doesn't exists");
    }
}

function removeEdge(v1, v2) {
    if (graph[v1].includes(v2)) {
        graph[v1] = graph[v1].filter(value => value != v2)
    } else if (graph[v2].includes(v1)) {
        graph[v2] = graph[v2].filter(value => value != v1)
    } else {
        console.log("Edge dose not exists")
    }
}

function bfs_search(startingNode) {
    var visited = {};
    var queue = [];
    // add the starting node to the queue
    visited[startingNode] = true;
    queue.push(startingNode);
    while (queue.length > 0) {
        var getQueueElement = queue.shift();
        console.log(getQueueElement);
        // get the adjacent list for current vertex
        var get_List = graph[getQueueElement];

        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];

            if (!visited[neigh]) {
                visited[neigh] = true;
                queue.push(neigh);
            }
        }
    }
}
// Main DFS method
function dfs(startingNode) {
    var visited = {};
    DFSUtil(startingNode, visited);
}

// Recursive function which process and explore
// all the adjacent vertex of the vertex with which it is called
function DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);
    var adj = graph[vert];
    for (var i in adj) {
        var get_elem = adj[i];
        if (!visited[get_elem])
            DFSUtil(get_elem, visited);
    }
}

function detectCycle() {
    var visited = {};
    let keys = Object.keys(graph);
    for (let node of keys) {
        if (!visited[node]) {
            if (DFS(node, graph[node], visited, -1)) return true;
        }
    }

    return false;
}

function DFS(node, adj, visited, parent) {
    visited[node] = true;
    console.log(parent)
    // console.log(visited)
    for (let value of adj) {
        // console.log(value)
        if (!visited[value]) {
            if (DFS(value, graph[value], visited, node)) return true;
        }
        if (visited[value]) {
            if (parent !== value) {
                console.log(value, parent)
                return true;
            }
        }
    }
    return false
}


addNode(0);
addNode(1);
addNode(2);
addNode(3);
addNode(4);

addEdge(0, 2);
// addEdge(2, 3);
// addEdge(3, 4);
// addEdge(0, 1);
// addEdge(4, 1);
bfs_search(0)
dfs(0)
// removeNode(1);
// removeEdge(2, 3)
console.log(detectCycle());
console.log(graph)