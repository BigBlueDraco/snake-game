import { Button } from "../Button/Button";
import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledConteiner, StyledPauseTitle } from "./PauseWindow.styled";
import { BiPlay } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

export const PauseWindow = ({ closeWindow, restart }) => {
  return (
    <ModalWindowWraper>
      <StyledConteiner>
        <StyledPauseTitle>PAUSE</StyledPauseTitle>
        <Button onClick={closeWindow}>
          <BiPlay />
        </Button>
        <Button onClick={restart}>
          <VscDebugRestart />
        </Button>
      </StyledConteiner>
    </ModalWindowWraper>
  );
};
