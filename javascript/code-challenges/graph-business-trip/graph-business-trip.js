'use strict';

function businessTrip(graph, array) {
  let total = 0;

  for (let i = 0; i < array.length - 1; i += 1) {
    let neighbors = graph.getNeighbors(array[i]);
    for (let j = 0; j < neighbors.length; j += 1) {
      let nextValue = array[i + 1].value;
      if (neighbors[j].vertex.value === nextValue) {
        total += neighbors[j].weight;
      }
    }
  }
  if (total === 0) {
    return null;
  } else {
    return parseInt(total);
  }
}

module.exports = businessTrip;
