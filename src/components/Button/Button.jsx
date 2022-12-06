import { StyledButton } from "./Button.styled";
export const Button = ({ active, children = "default btn", ...attrs }) => {
  return <StyledButton {...attrs}>{children}</StyledButton>;
};
