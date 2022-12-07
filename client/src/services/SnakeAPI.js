import axios from "axios";

const BASE_URL = "https://snake-game-production.up.railway.app/api/";
export const fetchTopGames = async () => {
  const res = await axios.get(`${BASE_URL}games/top`);
  return res.data;
};
export const postGame = async ({ name, score }) => {
  await axios.post(`${BASE_URL}games`, {
    name,
    score,
  });
};
