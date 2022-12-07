import { useEffect, useState } from "react";
import { createFood } from "../../utils/Food";
import {
  growSnake,
  moveSnake,
  snakeEatItSeff,
  snakeISOoutOfBounce,
} from "../../utils/Snake";

import { TopBar } from "../TopBar/TopBar";
import useInterval from "use-interval";
import { ScoreBar } from "../ScoreBar/ScoreBar";
import {
  StyledBordCell,
  StyledGameBord,
  StyledGameWraper,
} from "./GameBoard.styled";
import { PauseWindow } from "../PauseWindow/PauseWindow";
import { GameOverWindow } from "../GameOverWindow/GameOverWindow";
import { HelloWindow } from "../HelloWindow/HelloWindow";

const BOARD_SIZE = 10;
const BASE_SPEED = 400;
const BASE_DIRECTION = "down";
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
  const [dir, setDirection] = useState(BASE_DIRECTION);
  const [speed, setSpeed] = useState(BASE_SPEED);
  const [isPaused, setIsPaused] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFirstGame, setIsFirstGame] = useState(true);
  const spawnFood = () => {
    const newSnake = moveSnake();
    let newFood = createFood(BOARD_SIZE);
    if (
      snake.some(({ cord: { x, y } }) => x === newFood.x && y === newFood.y)
    ) {
      newFood = spawnFood();
    }
    return newFood;
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", moveControl);
    return () => {
      window.removeEventListener("keydown", moveControl);
      document.body.style.overflow = "auto";
    };
  });
  const reset = () => {
    setSnake([...START_SNAKE]);
    setDirection(BASE_DIRECTION);
    setScore(0);
    setIsGameOver(false);
  };
  useEffect(() => {
    if (snakeEatItSeff(snake) || snakeISOoutOfBounce(snake, BOARD_SIZE)) {
      setIsGameOver(true);
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

  useInterval(
    () => {
      setSnake((prevSnake) => moveSnake(prevSnake, dir));
      speedController();
    },
    isPaused || isGameOver ? null : speed
  );

  const cellType = (columnIndex, rowIndex) => {
    if (
      snake.some(
        (elem) => elem.cord.x === columnIndex && elem.cord.y === rowIndex
      )
    )
      return "snake";
    if (food.x === columnIndex && food.y === rowIndex) return food.type;
  };

  const moveControl = (e) => {
    const direction = directionFromKey(e.key);
    direction && setDirection(direction);
  };

  const speedController = () => {
    const dificulty = BASE_SPEED - Math.round(score / 100) * 100;
    setSpeed(dificulty);
  };

  const tonglePause = () => {
    !isGameOver && setIsPaused((prev) => !prev);
  };

  return (
    <StyledGameWraper>
      <TopBar score={score} pause={tonglePause} />
      <StyledGameBord>
        {isFirstGame && (
          <HelloWindow
            start={() => {
              setIsFirstGame(false);
              tonglePause();
            }}
          />
        )}
        {isPaused && !isFirstGame && (
          <PauseWindow
            closeWindow={tonglePause}
            restart={() => {
              reset();
              tonglePause();
            }}
          />
        )}
        {isGameOver && <GameOverWindow restart={reset} score={+score} />}

        {board.map((row, columnIndex) => (
          <div key={columnIndex}>
            {row.map((cellValue, rowIndex) => (
              <StyledBordCell
                type={cellType(columnIndex, rowIndex)}
                key={rowIndex}
              ></StyledBordCell>
            ))}
          </div>
        ))}
      </StyledGameBord>
    </StyledGameWraper>
  );
};
