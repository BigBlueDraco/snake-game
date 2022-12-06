import styled from "styled-components";
import { FOOD_TYPES } from "../../utils/Food";

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
  ${({ type }) => {
    switch (type) {
      case "snake":
        return "background: green; border-radius: 100%; border-color: transparent";
      case FOOD_TYPES.common.type:
        return "background: red;";
      case FOOD_TYPES.rare.type:
        return "background: yellow;";
      case FOOD_TYPES.legend.type:
        return "background: cyan;";
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
