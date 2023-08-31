import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function toggleGamePlay() {
    console.log(isGameStarted);
    setIsGameStarted((prev) => !prev);
    console.log(isGameStarted);
  }

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
