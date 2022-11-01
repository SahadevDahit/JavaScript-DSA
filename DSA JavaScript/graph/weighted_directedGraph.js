//Here the graph format {
//source:{"destination":"weight","destination1":"weight"}
//}

function DirectedGraph() {
    this.edges = {};
}
DirectedGraph.prototype.addVertex = function (vertex) {
    let keys = Object.keys(this.edges)
    if (!keys.includes(vertex)) {
        this.edges[vertex] = {};
    }
}

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

DirectedGraph.prototype.removeEdge = function (source, destination) {
    let keys = Object.keys(this.edges[source]);
    let bool = false;
    keys.map(key => {
        if (key == destination) {
            bool = true;
        }
    })
    if (bool) {
        delete this.edges[source][destination];

    } else {
        console.log("Edge dose not exists")
    }
}



let d_graph = new DirectedGraph();
d_graph.addVertex(0);
d_graph.addVertex(1);
d_graph.addVertex(2);
d_graph.addVertex(3);
d_graph.addVertex(4);
d_graph.addEdge(0, 1, 12);
d_graph.addEdge(0, 4, 18);
d_graph.addEdge(3, 4, 28);
d_graph.addEdge(2, 3, 17);

d_graph.removeEdge(0, 5)
console.log(d_graph.edges);