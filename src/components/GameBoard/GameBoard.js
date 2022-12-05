import { useEffect, useState } from "react";
import { Snake } from "../../utils/Snake";
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
  const [snake, setSnake] = useState(new Snake(0, 0));
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleMove);
    return () => {
      window.removeEventListener("keydown", handleMove);
      document.body.style.overflow = "auto";
    };
  });

  const handleMove = (e) => {
    const direction = directionFromKey(e.key);
    const { x, y } = snake.move(direction);
    const newSnake = new Snake(x, y);
    setSnake(newSnake);
  };
  return (
    <>
      <button
        onClick={() => {
          const { x, y } = snake.move("left");
          const newSnake = new Snake(x, y);
          setSnake(newSnake);
        }}
      >
        Move
      </button>
      <StyledGameBord onKeyDown={handleMove}>
        {board.map((row, columnIndex) => (
          <div key={columnIndex}>
            {row.map((cellValue, rowIndex) => {
              if (
                snake.head.val.x === columnIndex &&
                snake.head.val.y === rowIndex
              ) {
                return <StyledSnakeCell></StyledSnakeCell>;
              }
              return (
                <StyledBordCell key={rowIndex}>
                  {columnIndex} {rowIndex}
                </StyledBordCell>
              );
            })}
          </div>
        ))}
      </StyledGameBord>
    </>
  );
};
