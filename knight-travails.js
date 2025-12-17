// const board = createChestBoard();

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

  const x = fromVertex[0];
  const y = fromVertex[1];

  const queue = [[x, y, [[x, y]]]];
  const set = new Set();

  while (queue.length > 0) {
    const position = queue.shift();
    if (`${position[0]}, ${position[1]}` === `${toVertex[0]}, ${toVertex[1]}`) {
      return [...position[2]];
    } else {
      set.add(`${position[0]}, ${position[1]}`);
      possibleMoves.forEach((move) => {
        const newX = position[0] + move[0];
        const newY = position[1] + move[1];
        if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
          if (set.has(`${newX}, ${newY}`)) return;
          else queue.push([newX, newY, [...position[2], [newX, newY]]]);
        }
      });
    }
  }
}

console.log(knightMoves([2, 1], [7, 7]));

// function createChestBoard() {
//   const chestBoard = [];
//   const boardSize = 8;
//   for (let i = 0; i < boardSize; i++) {
//     chestBoard.push([]);
//     for (let j = 0; j < boardSize; j++) {
//       if ((i + j) % 2) chestBoard[i].push(createTile([i, j], "white"));
//       else chestBoard[i].push(createTile([i, j], "black"));
//     }
//   }
//   return chestBoard;
// }

// function createTile(tileCoordinates, tileColor) {
//   const coordinates = tileCoordinates;
//   const visited = 0;
//   const color = tileColor;
//   return { coordinates, visited, color };
// }

// function that returns the 8 possible edges from a node in the board

// function getEdges(vertex) {
//   const x = vertex[0];
//   const y = vertex[1];
//   const tile = board[x][y];
//   const edges = [];

//   return edges;
// }

// console.log(getEdges([, 0]));
