import { StyledScoreBar } from "./ScoreBar.styled";

export const ScoreBar = ({ children }) => {
  return <StyledScoreBar>Score: {children}</StyledScoreBar>;
};
