import { ScoreBar } from "../ScoreBar/ScoreBar";
import { StyledPauseIcon, StyledTopBar } from "./TopBar.styled";
import { Button } from "../Button/Button";
export const TopBar = ({ pause, score }) => {
  return (
    <StyledTopBar>
      <Button type="button" onClick={pause}>
        <StyledPauseIcon/>
      </Button>
      <ScoreBar>{score}</ScoreBar>
    </StyledTopBar>
  );
};
