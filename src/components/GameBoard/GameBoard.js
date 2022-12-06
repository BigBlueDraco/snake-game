import { useEffect, useState } from "react";
import { moveSnake, Snake } from "../../utils/Snake";
import {
  StyledBordCell,
  StyledGameBord,
  StyledSnakeCell,
} from "./GameBoard.styled";

const directionFromKey = (key = "") => {
  console.log(key);
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
    default:
      return "";
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
  const [snake, setSnake] = useState([
    { cord: { x: 0, y: 0 }, dir: "down" },
    { cord: { x: 0, y: 1 }, dir: "down" },
    { cord: { x: 0, y: 2 }, dir: "down" },
    { cord: { x: 0, y: 3 }, dir: "down" },
    { cord: { x: 0, y: 4 }, dir: "down" },
  ]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleMove);
    return () => {
      window.removeEventListener("keydown", handleMove);
      document.body.style.overflow = "auto";
    };
  });
  // useEffect(() => {
  //   if (snake.head.val.x === food.x && snake.head.val.y === food.y) {
  //     const newTailCell = snake.grow();
  //     console.log(newTailCell);
  //     snakeCells.add(`${newTailCell.val.x}${newTailCell.val.y}`);
  //     console.log("FOOOOOOOOD");
  //   }
  // }, [snake]);

  const cellType = (columnIndex, rowIndex) => {
    if (
      snake.some(
        (elem) => elem.cord.x === columnIndex && elem.cord.y === rowIndex
      )
    )
      return "snake";
    // if (food.x === columnIndex && food.y === rowIndex) return "food";
  };

  const handleMove = (e) => {
    const direction = directionFromKey(e.key);
    console.log(snake);
    setSnake(() => moveSnake(snake, direction));
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
