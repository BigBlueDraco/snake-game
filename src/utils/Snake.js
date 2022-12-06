const createSbakeNode = (x, y, direction = "") => {
  const cord = { x, y };
  const dir = direction;
  return { cord, dir };
};
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
  return snake.map((snakeNode, index) => {
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

export class Snake {
  constructor(x, y) {
    this.value = createSbakeNode(x, y);
  }

  grow() {}
}
