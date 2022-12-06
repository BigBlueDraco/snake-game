import { useEffect, useState } from "react";
import { moveSnake, Snake } from "../../utils/Snake";
import {
  StyledBordCell,
  StyledGameBord,
  StyledSnakeCell,
} from "./GameBoard.styled";

const directionFromKey = (key = "") => {
  switch (key.toString().toLowerCase()) {
    case "w":
      return "up";
    case "arrowup":
      return "up";

    case "s":
      return "down";
    case "arrowdown":
      return "down";

    case "d":
      return "right";
    case "arrowright":
      return "right";

    case "a":
      return "left";
    case "arrowleft":
      return "left";
  }
};

const createBoard = (BOARD_SIZE) => {
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

export const GameBoard = () => {
  const [board, setBoard] = useState(createBoard(10));
  // const [snake, setSnake] = useState(new Snake(0, 0));
  console.log(moveSnake([{ cord: { x: 0, y: 0 }, dir: "left" }], "down"));
  const [food, setFood] = useState({ x: 5, y: 0 });

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   window.addEventListener("keydown", handleMove);
  //   return () => {
  //     window.removeEventListener("keydown", handleMove);
  //     document.body.style.overflow = "auto";
  //   };
  // });
  // useEffect(() => {
  //   if (snake.head.val.x === food.x && snake.head.val.y === food.y) {
  //     const newTailCell = snake.grow();
  //     console.log(newTailCell);
  //     snakeCells.add(`${newTailCell.val.x}${newTailCell.val.y}`);
  //     console.log("FOOOOOOOOD");
  //   }
  // }, [snake]);

  const cellType = (columnIndex, rowIndex) => {
    // if () return "snake";
    // if (food.x === columnIndex && food.y === rowIndex) return "food";
  };

  const handleMove = (e) => {
    // const direction = directionFromKey(e.key);
    // const { x, y } = snake.move(direction);
    // const newSnake = new Snake(x, y);
    // const newSnakeCell = new Set(snakeCells);
    // snakeCells.delete(`${snake.head.val.x}${snake.head.val.y}`);
    // snakeCells.add(`${newSnake.head.val.x}${newSnake.head.val.y}`);
    // setSnake(newSnake);
  };

  return (
    <>
      <StyledGameBord onKeyDown={handleMove}>
        {board.map((row, columnIndex) => (
          <div key={columnIndex}>
            {row.map((cellValue, rowIndex) => (
              <StyledBordCell
                type={cellType(columnIndex, rowIndex)}
                key={rowIndex}
              >
                {columnIndex} {rowIndex}
              </StyledBordCell>
            ))}
          </div>
        ))}
      </StyledGameBord>
    </>
  );
};
