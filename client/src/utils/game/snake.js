import { oportunityDirection } from "./direction";

const moveSnakeNode = (snakeNode) => {
  const {
    cord: { x, y },
    dir: direction,
  } = snakeNode;
  switch (direction.toString().toLowerCase()) {
    case "up":
      return { x, y: y - 1 };
    case "down":
      return { x, y: y + 1 };
    case "left":
      return { x: x - 1, y };
    case "right":
      return { x: x + 1, y };
    default:
      return { x, y };
  }
};

export const moveSnake = (snake = [], direction) => {
  if (!direction) {
    return snake;
  }
  return [...snake].map((snakeNode, index) => {
    if (index === snake.length - 1) {
      snakeNode.dir = direction;
      snakeNode.cord = moveSnakeNode(snakeNode);
      return snakeNode;
    }
    snakeNode.dir = snake[index + 1].dir;
    snakeNode.cord = moveSnakeNode(snakeNode);
    return snakeNode;
  });
};
export const growSnake = (snake = []) => {
  const { cord, dir } = snake[0];
  const newDir = oportunityDirection(dir);
  const newSnakeNode = { cord, dir };
  newSnakeNode.cord = moveSnakeNode({ cord, dir: newDir });
  snake.unshift(newSnakeNode);
  return snake;
};
export const snakeEatItSeff = (snake = []) => {
  const last = snake.length - 1;
  const { x, y } = snake[last].cord;
  const index = snake.findIndex(({ cord }) => cord.x === x && cord.y === y);
  return index !== last;
};

export const snakeISOoutOfBounce = (snake = [], bordSize) => {
  return snake.some(
    ({ cord: { x, y } }) => x >= bordSize || y >= bordSize || x < 0 || y < 0
  );
};
