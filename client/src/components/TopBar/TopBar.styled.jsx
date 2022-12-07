import styled from "styled-components";
import { BsFillPauseFill } from "react-icons/bs";

export const StyledTopBar = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const StyledPauseIcon = styled(BsFillPauseFill)`
  width: 20px;
  height: 20px;
`;
