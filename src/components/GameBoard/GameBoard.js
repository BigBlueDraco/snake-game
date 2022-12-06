import { useEffect, useState } from "react";
import {
  growSnake,
  moveSnake,
  Snake,
  snakeEatItSeff,
  snakeISOoutOfBounce,
} from "../../utils/Snake";
import { ScoreBar } from "../ScoreBar/ScoreBar";
import {
  StyledBordCell,
  StyledGameBord,
  StyledSnakeCell,
} from "./GameBoard.styled";

const BOARD_SIZE = 10;
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
  const START_SNAKE = [
    { cord: { x: 0, y: 0 }, dir: "down" },
    { cord: { x: 0, y: 1 }, dir: "down" },
  ];
  const [board, setBoard] = useState(createBoard(BOARD_SIZE));
  const [snake, setSnake] = useState([...START_SNAKE]);
  console.log([...START_SNAKE]);
  const [food, setFood] = useState({ x: 5, y: 5, cost: 1 });
  const [score, setScore] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleMove);
    return () => {
      window.removeEventListener("keydown", handleMove);
      document.body.style.overflow = "auto";
    };
  });
  useEffect(() => {
    if (snakeEatItSeff(snake) || snakeISOoutOfBounce(snake, BOARD_SIZE)) {
      setSnake([...START_SNAKE]);
      setScore(0);
      return;
    }
    if (
      snake[snake.length - 1].cord.x === food.x &&
      snake[snake.length - 1].cord.y === food.y
    ) {
      setSnake((prevSnake) => growSnake(prevSnake));
      setScore((prev) => prev + food.cost);
      setFood({ x: 2, y: 3, cost: 20 });
    }
  }, [snake]);

  const cellType = (columnIndex, rowIndex) => {
    if (
      snake.some(
        (elem) => elem.cord.x === columnIndex && elem.cord.y === rowIndex
      )
    )
      return "snake";
    if (food.x === columnIndex && food.y === rowIndex) return "food";
  };

  const handleMove = (e) => {
    const direction = directionFromKey(e.key);
    setSnake((prevSnake) => moveSnake(prevSnake, direction));
  };

  return (
    <>
      <ScoreBar>{score}</ScoreBar>
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
