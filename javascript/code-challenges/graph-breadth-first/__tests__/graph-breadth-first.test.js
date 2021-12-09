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

    expect(graph.breadthFirst(A).has(B)).toEqual(true);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(typeof graph.getNodes()).toEqual('object');
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    let result = [{ vertex: { value: 'B' }, weight: 0 }];
    expect(graph.getNeighbors(A)).toEqual(result);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    graph.addDirectedEdge(B, C, 1);
    let result = [{ vertex: { value: 'C' }, weight: 1 }];
    expect(graph.getNeighbors(B)).toEqual(result);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toEqual(8);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    let A = graph.addVertex('A');
    graph.addDirectedEdge(A, B, 1);
    let result = [{ vertex: { value: 'B' }, weight: 1 }];
    expect(graph.getNeighbors(A)).toEqual(result);
  });

  test('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(graph.size()).toBe(null);
  });
});
