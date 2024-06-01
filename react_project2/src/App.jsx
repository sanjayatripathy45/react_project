import React, { useState } from 'react'
import Player from '../src/components/Player.jsx'

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const App = () => {
  const [playerName, setPlayerName] = useState(PLAYERS)

  const handlePlayerNameChange = (symbol, newName) =>{

    setPlayerName(prevName => {
      return {
        ...prevName,
        [symbol] : newName
      }
    })

  }
  const activePlayer = "X"

  return (
    <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
        intialName={PLAYERS.X}
        symbol={"X"}
        isActive = { activePlayer === "X"}
        onChangeName={handlePlayerNameChange}
          
        />
        <Player
          intialName={PLAYERS.O}
          symbol={"O"}
          isActive = {activePlayer === "O"}
          onChangeName={handlePlayerNameChange}
        />
      </ol>
   
    </div>
  
  </main>
  )
}

export default App