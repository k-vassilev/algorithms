// Unidirected
// Not weighted
// No Cycles

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Adjanency List vs Matrix, less intersections => Adjacency List

// The graph
const adjacenyList = new Map();

// Add node
function addNode(node) {
  adjacenyList.set(node, []);
}

// Add edge, unidirected
function addEdge(origin, destination) {
  adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// BFS Breadth First Search

console.log("BFS start #####");

let bfsCounter = 0;

function bfs(start) {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue

    const destinations = adjacenyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`BFS Found it in ${bfsCounter} iterations`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
        bfsCounter += 1;
      }
    }
  }
}

bfs("PHX");

// DFS Depth First Search

console.log("DFS start #####");

let dfsCount = 0;

function dfs(start, visited = new Set()) {
  console.log(start);
  dfsCount += 1;

  visited.add(start);

  const destinations = adjacenyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok in ${dfsCount} iterations`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("PHX");
