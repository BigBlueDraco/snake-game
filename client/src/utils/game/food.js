import { getRandomInt } from "./random.js";
import { FOOD_TYPES } from "../constants/foodTypes.js";

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
