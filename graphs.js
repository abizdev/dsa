//     2 --- 0
//   /   \
//  1 --- 3

// edge list
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// adjacent list - the index of the array is the value of actual graph node
const graphList = [[2], [2, 3], [0,  1, 3], [1, 2 ]]

// adjacent matrix
const graphMatrix = {
	0: [ 0, 0, 1, 0 ],
	1: [ 0, 0, 1, 1 ],
	2: [ 1, 1, 0, 1 ],
	3: [ 0, 1, 1, 0 ],
}

class Graph {
	constructor() {
		this.numberOfNodes = 0
		this.adjacentList = {}
	}
	
	addVertex(node) {
		if (this.adjacentList.hasOwnProperty(node)) {
			return false
		}
		
		this.adjacentList[node] = [];
		this.numberOfNodes++;
	}
	
	addEdge(node1, node2) {
		// 	undirected graph
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	}
}

const myGraph = new Graph()

myGraph.addVertex(0)
myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addVertex(3)
myGraph.addVertex(4)
myGraph.addVertex(5)
myGraph.addVertex(6)
myGraph.addEdge(0, 1)
myGraph.addEdge(0, 2)
myGraph.addEdge(1, 3)
myGraph.addEdge(1, 2)
myGraph.addEdge(2, 4)
myGraph.addEdge(3, 4)
myGraph.addEdge(4, 5)
myGraph.addEdge(5, 6)




