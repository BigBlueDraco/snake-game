import styled from "styled-components";

export const StyledGameBord = styled("div")`
  display: flex;
  border: solid 30px blue;
`;

export const StyledBordCell = styled("div")`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: solid 1px blue;
  ${(p) => {
    switch (p.type) {
      case "snake":
        return "background: green; border-radius: 100%; border-color: transparent";
      case "food":
        return "background: red;";
    }
  }}
`;

// export const StyledSnakeCell = styled(`div`)`
//   display: flex;
//   align-content: center;
//   justify-content: center;
//   align-items: center;
//   width: 80px;
//   height: 80px;
//   border: solid 1px blue;
//   background: green;
// `;
