import { useEffect, useState } from "react";
import { fetchTopGames } from "../../services/SnakeAPI";
import {
  StyledTableColumn,
  StyledTableRow,
  StyledTableCell,
  StyledTable,
} from "./ListOfRecords.styled";

export const ListOfRecords = () => {
  const [list, setList] = useState([]);
  const fetch = async () => {
    const data = await fetchTopGames();
    setList(data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <StyledTable>
      <StyledTableColumn>
        <StyledTableRow>
          <StyledTableCell>Name</StyledTableCell>
        </StyledTableRow>
        {list[0] &&
          list.map(({ id, name }) => (
            <StyledTableRow key={id}>
              <StyledTableCell>{name}</StyledTableCell>
            </StyledTableRow>
          ))}
      </StyledTableColumn>
      <StyledTableColumn>
        <StyledTableRow>
          <StyledTableCell>Score</StyledTableCell>
        </StyledTableRow>
        {list[0] &&
          list.map(({ id, name, score }) => (
            <StyledTableRow key={id}>
              <StyledTableCell>{score}</StyledTableCell>
            </StyledTableRow>
          ))}
      </StyledTableColumn>
    </StyledTable>
  );
};
