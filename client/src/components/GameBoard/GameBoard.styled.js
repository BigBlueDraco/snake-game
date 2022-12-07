import styled from "styled-components";
import { FOOD_TYPES } from "../../utils/food";

export const StyledGameWraper = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const StyledGameBord = styled("div")`
  display: flex;
  border: solid 30px blue;
  position: relative;
`;

export const StyledBordCell = styled("div")`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border: solid 1px blue;
  ${({ type }) => {
    switch (type) {
      case "snake":
        return "background: green; border-radius: 100%; border-color: transparent";
      case FOOD_TYPES.common.type:
        return "background: red; border-radius: 20%;";
      case FOOD_TYPES.rare.type:
        return "background: yellow; border-radius: 40%;";
      case FOOD_TYPES.legend.type:
        return "background: cyan; border-radius: 50%;";
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
