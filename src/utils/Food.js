import { getRandomInt } from "./Random.js";

const FOOD_TYPES = {
  common: {
    type: "common",
    cost: 1,
  },
  rare: {
    type: "rare",
    cost: 5,
  },
  legend: {
    type: "legend",
    cost: 10,
  },
};
const getRandomType = () => {
  const random = getRandomInt(20);
  if (random <= 10) {
    return { ...FOOD_TYPES.common };
  }
  if (random <= 19) {
    return { ...FOOD_TYPES.rare };
  }
  if ((random = 20)) {
    return { ...FOOD_TYPES.legend };
  }
};

export const createFood = (boardSize = 0) => {
  const cord = { x: getRandomInt(boardSize), y: getRandomInt(boardSize) };
  const type = getRandomType();
  return { ...cord, ...type };
};
