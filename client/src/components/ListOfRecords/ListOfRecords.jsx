import { useEffect, useState } from "react";
import { fetchTopGames } from "../../services/SnakeAPI";

export const ListOfRecords = () => {
  const [list, setList] = useState([]);
  const fetch = async () => {
    const data = await fetchTopGames();
    setList(data);
  };
  useEffect(() => {
    fetch();
  });
  return (
    <>
      {list[0] &&
        list.map(({ id, name, score }) => (
          <div key={id}>
            <p>NAME: {name}</p>
            <p>SCORE: {score}</p>
          </div>
        ))}
    </>
  );
};
