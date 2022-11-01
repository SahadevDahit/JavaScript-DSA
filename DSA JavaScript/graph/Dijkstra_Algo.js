function DirectedGraph() {
    this.edges = {};
}
//Add vertex
DirectedGraph.prototype.addVertex = function (vertex) {
    let keys = Object.keys(this.edges)
    if (!keys.includes(vertex)) {
        this.edges[vertex] = {};
    }
}
//Add edges to the Graph
DirectedGraph.prototype.addEdge = function (source, destination, weight) {
    if (weight === undefined) {
        weight = 0;
    }
    let keys = Object.keys(this.edges[destination]);
    let bool = true;
    keys.map(key => {
        if (key == source) {
            bool = false;
        }
    })
    if (bool) {
        this.edges[source][destination] = weight;
    } else {
        console.log("Graph can't be bidirectional")
    }
}


function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {


    var minimumDistance = Infinity,
        nodeWithMinimumDistance = null;

    for (var node in Q) {

        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}
DirectedGraph.prototype.Dijkstra = function (source) {
    var Q = {},
        dist = {};

    for (var vertex in this.edges) {
        // unknown distances set to Infinity
        dist[vertex] = Infinity;
        // add v to Q
        Q[vertex] = this.edges[vertex];
    }

    // Distance from source to source init to 0
    dist[source] = 0;
    while (!_isEmpty(Q)) {

        var u = _extractMin(Q, dist); // get the min distance
        // remove u from Q
        delete Q[u];
        for (var neighbor in this.edges[u]) {
            // current distance

            var alt = dist[u] + this.edges[u][neighbor];
            // a shorter path has been found

            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;

            }
        }
    }
    return dist;
}


var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);
digraph1.Dijkstra("A")
console.log(digraph1.Dijkstra("A"))
console.log(digraph1);