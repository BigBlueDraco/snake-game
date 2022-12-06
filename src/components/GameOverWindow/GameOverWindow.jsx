import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledGameOverTitle } from "./GameOverWindow.styled";
import { Button } from "../Button/Button";

export const GameOverWindow = ({ restart = () => {}, children }) => {
  return (
    <ModalWindowWraper closeWindow={restart}>
      <StyledGameOverTitle>GAME OVER</StyledGameOverTitle>
      <p>{children}</p>
      <Button onClick={restart}>click to restart</Button>
    </ModalWindowWraper>
  );
};
