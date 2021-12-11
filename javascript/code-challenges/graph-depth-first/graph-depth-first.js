'use strict';

// our data object
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// our connection from one Vertex to the other
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

/**
 * Implements an adjacency list to store Vertices and edges
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // adding a value to our adjency
  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);

    // for simplicities sake
    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // check if the vertex exists in our list of vertices.
    if (
      !this.adjacencyList.has(startVertex) &&
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error('Vertex Error');
    }

    // what should do to add them to our adjacency values?

    // grab all edges connected to the starting vertex
    let neighbors = this.adjacencyList.get(startVertex);

    // create a new edge from our ending vertex and push it into the list of neighbors.
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
    }

    // I don't want mutate this array
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      // I need to see all of current nodes adjecneies
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    return visitedNodes;
  }

  getNodes() {
    return this.adjacencyList;
  }

  size() {
    if (this.adjacencyList.size === 0) {
      return null;
    } else {
      return this.adjacencyList.size;
    }
  }
}

function depthFirst(graph, vertex) {
  const visitedNodes = new Set();
  visitedNodes.add(vertex);

  function traverse(current, visited) {
    visited.add(current);
    const neighbors = graph.getNeighbors(current);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        traverse(neighbor.vertex, visited);
      }
    }
  }
  traverse(vertex, visitedNodes);

  return visitedNodes;
}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(D, E);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(H, F);
// graph.addDirectedEdge(F, G);
// graph.addDirectedEdge(G, H);
// graph.addDirectedEdge(H, F);

// console.log(graph);
// console.log(graph.breadthFirst(A));
// console.log(graph.getNodes());
console.log(depthFirst(graph, A));

(module.exports = Graph), depthFirst;
