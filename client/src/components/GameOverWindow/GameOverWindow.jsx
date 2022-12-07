import { ModalWindowWraper } from "../modalWindowWraper/modalWindowWraper";
import { StyledGameOverTitle } from "./GameOverWindow.styled";
import { Button } from "../Button/Button";
import { postGame } from "../../services/SnakeAPI";
import {useEffect} from 'react'

export const GameOverWindow = ({ restart = () => {}, score }) => {
   useEffect(()=>{
    const name = sessionStorage.getItem("name");
    postGame({name, score: +score});
   })
  return (
    <ModalWindowWraper >
      <StyledGameOverTitle>GAME OVER</StyledGameOverTitle>
      <p>{score}</p>
      <Button onClick={restart}>click to restart</Button>
    </ModalWindowWraper>
  );
};
