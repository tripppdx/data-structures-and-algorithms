'use strict';

const Graph = require('../graph-depth-first');
const depthFirst = require('../graph-depth-first');

describe('Graph tests', () => {
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

  test('Conduct a depth first preorder traversal on a graph', () => {
    expect(depthFirst(graph, A)).toEqual([A, B, C, G, D, E, H, F]);
  });
});
