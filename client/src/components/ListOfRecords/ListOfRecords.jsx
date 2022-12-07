import { useEffect, useState } from "react";
import { fetchTopGames } from "../../services/SnakeAPI";
import {
  StyledTable,
  StyledTableRow,
  StyledTableCell,
} from "./ListOfRecords.styled";

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
      <StyledTable>
        <StyledTableRow>
          <StyledTableCell>Name</StyledTableCell>
        </StyledTableRow>
        {list[0] &&
          list.map(({ id, name, score }) => (
            <StyledTableRow key={id}>
              <StyledTableCell>NAME: {name}</StyledTableCell>
            </StyledTableRow>
          ))}
      </StyledTable>
      <StyledTable>
        <StyledTableRow>
          <StyledTableCell>Score</StyledTableCell>
        </StyledTableRow>
        {list[0] &&
          list.map(({ id, name, score }) => (
            <StyledTableRow key={id}>
              <StyledTableCell>{score}</StyledTableCell>
            </StyledTableRow>
          ))}
      </StyledTable>
    </>
  );
};
