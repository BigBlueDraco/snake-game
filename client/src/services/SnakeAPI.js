import axios from "axios";

export const fetchTopGames = async () => {
  const res = await axios.get("http://localhost:8080/api/games/top");
  return res.data;
};
export const postGame = async ({ name, score }) => {
  await axios.post("http://localhost:8080/api/games/", {
    name,
    score,
  });
};
