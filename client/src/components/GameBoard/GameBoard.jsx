import { useCallback, useEffect, useState } from "react";
import useInterval from "use-interval";

import {
  createFood,
  growSnake,
  moveSnake,
  snakeEatItSeff,
  snakeISOoutOfBounce,
  directionFromKey,
  createBoard,
} from "../../utils/game/index";

import {
  BOARD_SIZE,
  BASE_SPEED,
  BASE_DIRECTION,
} from "../../utils/constants/gameConfig";
import { TopBar } from "../TopBar/TopBar";
import { PauseWindow } from "../PauseWindow/PauseWindow";
import { GameOverWindow } from "../GameOverWindow/GameOverWindow";
import { HelloWindow } from "../HelloWindow/HelloWindow";

import {
  StyledBordCell,
  StyledGameBord,
  StyledGameWraper,
} from "./GameBoard.styled";
import { oportunityDirection } from "../../utils/game/direction";

export const GameBoard = () => {
  const START_SNAKE = [
    { cord: { x: 0, y: 0 }, dir: "down" },
    { cord: { x: 0, y: 1 }, dir: "down" },
  ];
  const [board] = useState(createBoard(BOARD_SIZE));
  const [snake, setSnake] = useState([...START_SNAKE]);
  const [food, setFood] = useState(createFood(BOARD_SIZE));
  const [score, setScore] = useState(0);
  const [dir, setDirection] = useState(BASE_DIRECTION);
  const [speed, setSpeed] = useState(BASE_SPEED);
  const [isPaused, setIsPaused] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFirstGame, setIsFirstGame] = useState(true);

  const spawnFood = useCallback(() => {
    let newFood = createFood(BOARD_SIZE);
    if (
      snake.some(({ cord: { x, y } }) => x === newFood.x && y === newFood.y)
    ) {
      newFood = spawnFood();
    }
    return newFood;
  }, [snake]);
  const cellType = (columnIndex, rowIndex) => {
    if (
      snake.some(
        (elem) => elem.cord.x === columnIndex && elem.cord.y === rowIndex
      )
    )
      return "snake";
    if (food.x === columnIndex && food.y === rowIndex) return food.type;
  };

  const moveController = (e) => {
    const direction = directionFromKey(e.key);
    if (direction === oportunityDirection(dir)) return;

    direction &&
      !(isPaused || isFirstGame || isGameOver) &&
      setDirection(direction);
  };
  const speedController = () => {
    const dificulty = BASE_SPEED - Math.round(score / 100) * 100;
    setSpeed(dificulty);
  };

  const tonglePause = () => {
    if (isGameOver) return;
    setIsPaused((prev) => !prev);
  };
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
  }, [snake, food, spawnFood]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", moveController);
    return () => {
      window.removeEventListener("keydown", moveController);
      document.body.style.overflow = "auto";
    };
  });

  useInterval(
    () => {
      setSnake((prevSnake) => moveSnake(prevSnake, dir));
      speedController();
    },
    isPaused || isGameOver || isFirstGame ? null : speed
  );

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
