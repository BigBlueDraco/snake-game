import styled from "styled-components";

export const StyledTable = styled("div")`
  padding-left: 20px;
  display: flex;
`;
export const StyledTableColumn = styled("ul")`
  margin: 0;
  padding: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
export const StyledTableRow = styled("li")`
  display: flex;
  padding: 10px 20px;
  border: 1px solid red;
`;
export const StyledTableCell = styled("p")`
  //   border: 1px solid red;
  padding: 0 20px;
  font-size: 18px;
  display: flex;
`;
