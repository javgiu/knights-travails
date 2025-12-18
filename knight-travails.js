function positionToKey(position) {
  return `${position[0]}, ${position[1]}`;
}

function knightMoves(fromVertex, toVertex) {
  const possibleMoves = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];
  const queue = [[...fromVertex, [fromVertex]]];
  const set = new Set();

  while (queue.length > 0) {
    const position = queue.shift();
    if (positionToKey(position) === positionToKey(toVertex)) {
      return [...position[2]];
    } else {
      set.add(positionToKey(position));
      const validMoves = getValidMoves(position[0], position[1]);
      validMoves.forEach((move) => {
        if (!set.has(positionToKey(move))) {
          queue.push([...move, [...position[2], move]]);
        }
      });
    }
  }

  function getValidMoves(x, y) {
    const edges = [];
    possibleMoves.forEach((move) => {
      const newX = x + move[0];
      const newY = y + move[1];
      if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
        edges.push([newX, newY]);
      }
    });

    return edges;
  }
}

function displayPath(path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path: `);
  path.forEach((pos) => console.log(pos));
}

displayPath(knightMoves([2, 1], [7, 7]));
