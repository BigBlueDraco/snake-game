import { useState } from "react";
import { Button } from "../Button/Button";
import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledInput } from "./HelloWindow.styled";

export const HelloWindow = ({ start }) => {
  const [name, setName] = useState(sessionStorage.getItem("name"));
  const saveName = (e) => {
    e.preventDefault();
    const inputedName = e.target.name.value;
    if(name){
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
      <form onSubmit={saveName}>
        <p>Hello {name ? name : "Anonimus"}</p>
        {!name && <StyledInput name="name" required />}
        <Button type="submit">startGame</Button>
      </form>
    </ModalWindowWraper>
  );
};
