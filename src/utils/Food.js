import { getRandomInt } from "./Random.js";

export const FOOD_TYPES = {
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
  const random = getRandomInt(100);
  if (random <= 50) {
    return { ...FOOD_TYPES.common };
  }
  if (random <= 85) {
    return { ...FOOD_TYPES.rare };
  }
  if (random <= 100) {
    return { ...FOOD_TYPES.legend };
  }
};

export const createFood = (boardSize = 0) => {
  const cord = { x: getRandomInt(boardSize), y: getRandomInt(boardSize) };
  const type = getRandomType();
  return { ...cord, ...type };
};
