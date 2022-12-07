import axios from "axios";

export async function fetchTopGames() {
  const res = await axios.get("http://localhost:8080/api/games/top");
  return res.data;
}
