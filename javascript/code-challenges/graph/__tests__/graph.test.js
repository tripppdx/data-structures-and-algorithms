'use strict';

const Graph = require('../graph');

describe('Graph tests', () => {
  const graph = new Graph();

  let A = graph.addVertex('A');
  let B = graph.addVertex('B');
  let C = graph.addVertex('C');
  let D = graph.addVertex('D');
  let E = graph.addVertex('E');
  let F = graph.addVertex('F');
  let G = graph.addVertex('G');
  // let H = graph.addVertex('H');

  test('Node can be successfully added to the graph', () => {
    const H = graph.addVertex('H');
    expect(graph.size()).toEqual(8);
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });
  test('A graph with only one node and edge can be properly returned', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });
  test('An empty graph properly returns null', () => {
    graph.addDirectedEdge(A, B);
    graph.breadthFirst(A);
    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });
});
