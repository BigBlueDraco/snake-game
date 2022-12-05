class SnakeNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Snake {
  constructor(x, y) {
    const node = new SnakeNode({ x, y });
    this.head = node;
    this.tail = node;
  }
  move(direction = "") {
    const { x, y } = this.head.val;
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
  }
}
