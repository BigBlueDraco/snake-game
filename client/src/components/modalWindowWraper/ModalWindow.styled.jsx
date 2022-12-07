import styled from "styled-components";

export const StyledBackdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledModalWindow = styled("div")`
  color: #000;
  position: relative;
  z-index: 100;
  width: 550px;
  border-radius: 20px;
  background: #fff;
  padding: 40px 20px;
`;
