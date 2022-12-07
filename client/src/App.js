import logo from "./logo.svg";
import "./App.css";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { ListOfRecords } from "./components/ListOfRecords/ListOfRecords";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameBoard></GameBoard>
        <ListOfRecords />
      </header>
    </div>
  );
}

export default App;
