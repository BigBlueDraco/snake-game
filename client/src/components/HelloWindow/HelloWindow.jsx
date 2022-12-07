import { useState } from "react";
import { Button } from "../Button/Button";
import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledInput, StyledForm } from "./HelloWindow.styled";
import { BiPlay } from "react-icons/bi";

export const HelloWindow = ({ start }) => {
  const [name] = useState(sessionStorage.getItem("name"));
  const saveName = (e) => {
    e.preventDefault();
    const inputedName = e.target.name.value;
    if (name) {
      start();
    }
    if (!inputedName) {
      return;
    }
    sessionStorage.setItem("name", inputedName);
    start();
  };
  return (
    <ModalWindowWraper>
      <StyledForm onSubmit={saveName}>
        <label>{name ? "Hello " + name : "Enter your name:"}</label>
        {!name && <StyledInput name="name" required />}
        <Button type="submit">
          <BiPlay />
        </Button>
      </StyledForm>
    </ModalWindowWraper>
  );
};
