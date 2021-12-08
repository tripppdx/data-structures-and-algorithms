# Graphs

Create a Graph class. The graph should be represented as an adjacency list. Define methods for the following actions:

- Add node: Add a node to the graph
- Add edge: Adds a new edge between two nodes in the graph. If specified, assign a weight to the edge. Both nodes should already be in the Graph.
- Get nodes: Returns all of the nodes in the graph as a set.
- Get neighbours: Returns a collection of edges connected to the given node. Include the weight of the connection in the returned collection
- Get size: Returns the total number of nodes in the graph

## Challenge

- Node can be successfully added to the graph
- An edge can be successfully added to the graph
- A collection of all nodes can be properly retrieved from the graph
- All appropriate neighbors can be retrieved from the graph
- Neighbors are returned with the weight between nodes included
- The proper size is returned, representing the number of nodes in the graph
- A graph with only one node and edge can be properly returned
- An empty graph properly returns null

## Approach & Efficiency

Big O time complexity:

`graph.addVertex()` - O(1)
`graph.addDirectedEdge(startVertex, endVertex, weight = 0)` - O(1)
`graph.getNeighbors(vertex)` - O(n)
`graph.getNodes()` - O(1)
`graph.getSize()` - O(1)

## API

`graph.addVertex()`

- Arguments: value
- Returns: The added node

`graph.addDirectedEdge(startVertex, endVertex, weight = 0)`

- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing

`graph.getNeighbors(vertex)`

- Arguments: node
- Returns a collection of edges connected to the given node

`graph.getNodes()`

- Arguments: none
- Returns: all of the nodes in the graph as a set

`graph.getSize()`

- Arguments: none
- Returns the total number of nodes in the graph
