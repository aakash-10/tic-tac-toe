import { useState } from 'react'
import GameBoard from './components/gameBoard.jsx'
import Player from './components/player.jsx'
import Log from './components/Log.jsx'
function App() {
  const [active, setActive] = useState('X')
  function handleSelectSquare () {
    setActive((curActivePlayer)=> curActivePlayer == 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
         <Player initialName="Player 1" symbol="X" isActive={active === 'X'} />
         <Player initialName="Player 2" symbol="0" isActive={active === 'O'}/> 
         
        </ol>
<GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={active}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
