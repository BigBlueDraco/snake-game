import { Button } from "../Button/Button";
import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledConteiner, StyledPauseTitle } from "./PauseWindow.styled";

export const PauseWindow = ({ closeWindow, restart }) => {
  return (
    <ModalWindowWraper>
      <StyledConteiner>
        <StyledPauseTitle>PAUSE</StyledPauseTitle>
        <Button onClick={closeWindow}>Continue</Button>
        <Button onClick={restart}>Reset</Button>
      </StyledConteiner>
    </ModalWindowWraper>
  );
};
