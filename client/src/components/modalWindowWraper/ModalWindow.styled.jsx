import styled from "styled-components";

export const StyledBackdrop = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledModalWindow = styled("div")`
  color: #000;
  position: relative;
  z-index: 100;
  // width: 200px;
  border-radius: 20px;
  background: #fff;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
