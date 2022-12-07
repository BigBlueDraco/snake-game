import { ScoreBar } from "../ScoreBar/ScoreBar";
import { StyledTopBar } from "./TopBar.styled";
import { Button } from "../Button/Button";
export const TopBar = ({ pause, score }) => {
  return (
    <StyledTopBar>
      <Button type="button" onClick={pause}>
        Pause
      </Button>
      <ScoreBar>{score}</ScoreBar>
    </StyledTopBar>
  );
};
