// Vishwanath Manik Shinde
// 2301179

class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      this.adjList.set(vertex, []);
    }
  
    addEdge(vertex1, vertex2) {
      this.adjList.get(vertex1).push(vertex2);
      this.adjList.get(vertex2).push(vertex1); // for undirected graph
    }
  
    dfs(startVertex) {
      const visited = new Set();
      this._dfs(startVertex, visited);
    }
  
    _dfs(vertex, visited) {
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
  
        const neighbors = this.adjList.get(vertex);
        for (const neighbor of neighbors) {
          this._dfs(neighbor, visited);
        }
      }
    }
  
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
      visited.add(startVertex);
  
      while (queue.length !== 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex);
  
        const neighbors = this.adjList.get(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  // Example usage
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  
  console.log('DFS traversal:');
  graph.dfs('A');
  
  console.log('\nBFS traversal:');
  graph.bfs('A');  