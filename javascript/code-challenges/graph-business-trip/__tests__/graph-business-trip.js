'use strict';

const Graph = require('../../graph/graph');
const businessTrip = require('../graph-business-trip');

describe('Graph tests', () => {
  const graph = new Graph();

  const Pandora = graph.addVertex('Pandora');
  const Arendelle = graph.addVertex('Arendelle');
  const Metroville = graph.addVertex('Metroville');
  const Monstropolis = graph.addVertex('Monstropolis');
  const Narnia = graph.addVertex('Narnia');
  const Naboo = graph.addVertex('Naboo');

  graph.addDirectedEdge(Pandora, Arendelle, 150);
  graph.addDirectedEdge(Arendelle, Monstropolis, 42);
  graph.addDirectedEdge(Pandora, Metroville, 82);
  graph.addDirectedEdge(Monstropolis, Naboo, 73);
  graph.addDirectedEdge(Naboo, Narnia, 250);
  graph.addDirectedEdge(Narnia, Metroville, 37);
  graph.addDirectedEdge(Metroville, Arendelle, 99);
  graph.addDirectedEdge(Metroville, Monstropolis, 105);
  graph.addDirectedEdge(Metroville, Naboo, 26);

  test('Determine trip Metroville, Pandora', () => {
    expect(businessTrip(graph, [Pandora, Metroville])).toEqual(82);
  });

  test('Determine trip Arendelle, New Monstropolis, Naboo', () => {
    expect(businessTrip(graph, [Arendelle, Monstropolis, Naboo])).toEqual(115);
  });
  test('Determine trip Naboo, Pandora', () => {
    expect(businessTrip(graph, [Naboo, Pandora])).toBe(null);
  });
});
