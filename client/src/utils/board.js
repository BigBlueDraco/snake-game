export const createBoard = (BOARD_SIZE) => {
  let count = 1;
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const currentRow = [];
    for (let colum = 0; colum < BOARD_SIZE; colum++) {
      currentRow.push("+");
    }
    board.push(currentRow);
  }
  return board;
};
