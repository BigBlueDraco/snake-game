import { useEffect, useState } from "react";
import { createFood } from "../../utils/Food";
import {
  growSnake,
  moveSnake,
  snakeEatItSeff,
  snakeISOoutOfBounce,
} from "../../utils/Snake";

import useInterval from "use-interval";
import { ScoreBar } from "../ScoreBar/ScoreBar";
import {
  StyledBordCell,
  StyledGameBord,
  StyledSnakeCell,
} from "./GameBoard.styled";

const BOARD_SIZE = 5;
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
  const [food, setFood] = useState(createFood(BOARD_SIZE));
  const [score, setScore] = useState(0);
  const [dir, setDirection] = useState("down");
  console.log(dir);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", moveControl);
    return () => {
      window.removeEventListener("keydown", moveControl);
      document.body.style.overflow = "auto";
    };
  });
  const spawnFood = () => {
    const newSnake = moveSnake();
    let newFood = createFood(BOARD_SIZE);
    if (
      snake.some(({ cord: { x, y } }) => x === newFood.x && y === newFood.y)
    ) {
      newFood = spawnFood();
    }
    console.log(newFood);
    return newFood;
  };
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
      setFood(spawnFood());
    }
  }, [snake]);
  useInterval(() => {
    console.log("interval");
    setSnake((prevSnake) => moveSnake(prevSnake, dir));
  }, 500);

  const cellType = (columnIndex, rowIndex) => {
    if (
      snake.some(
        (elem) => elem.cord.x === columnIndex && elem.cord.y === rowIndex
      )
    )
      return "snake";
    if (food.x === columnIndex && food.y === rowIndex) return "food";
  };
  const moveControl = (e) => {
    const direction = directionFromKey(e.key);
    direction && setDirection(direction);
  };

  return (
    <>
      <ScoreBar>{score}</ScoreBar>
      <StyledGameBord
        onKeyDown={(e) => {
          moveControl(e);
        }}
      >
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
