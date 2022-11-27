// const graph = {
//   1:[3,4,6],
//   3:[1,5,6],
//   4:[1,5,8],
//   5:[3,4],
//   6:[1,3],
//   8:[4]
// };

class Graph{
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
    return this;
  }
  addEdge(node1, node2) {
    try {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
      return this;
    }
    catch {
      return "Los nodos especificados no existen";
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');