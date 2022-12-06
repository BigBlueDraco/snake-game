import { StyledBackdrop, StyledModalWindow } from "./ModalWindow.styled";

export const ModalWindowWraper = ({ children, closeWindow = () => {} }) => {
  return (
    <StyledBackdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeWindow();
        }
      }}
    >
      <StyledModalWindow>{children}</StyledModalWindow>
    </StyledBackdrop>
  );
};
