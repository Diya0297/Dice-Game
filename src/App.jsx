
import styled from "styled-components";
import StartGame from "./Components/StartGame";
import PlayGame from "./Components/PlayGame";
import { useState } from "react";



function App() {
  
  const [showisPlayGame, setisPlayGame] = useState(false);

  function togglePlayGame(){
    setisPlayGame(prev => !prev);
  }

  return (
    <>
      {showisPlayGame ? <PlayGame /> : <StartGame toggle={togglePlayGame} /> }
    </>
  )
}

export default App;
