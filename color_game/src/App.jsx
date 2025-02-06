import './App.css';

import React, { useState } from 'react'

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black']
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
  const [targetColor, setTargetColor] = useState(randomColor())
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('')
  const win = 'Yayy I won!!🎉';
  const lose = 'Wrong! Try again. ❌'
  const startOver = 'Start Over';

  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setScore((score) => score +1)

      setGameStatus('')
      setTimeout(() => {setGameStatus(win)}, 10)
      setTimeout(() => {setGameStatus('')}, 3200)
      setTimeout(() => {setTargetColor(randomColor())}, 3300)
      
    }
    else {
      setGameStatus(lose)
      setTimeout(() => {setGameStatus('')}, 1500)
    }
  }

  const reset = () => {
    setScore(0)
    setGameStatus(startOver)
    setTimeout(() => {setGameStatus('')}, 1500)
  }

  return (
    <section>
      <header>
        <div>
          <h1><span className='purple'>My</span> <span className='red'>Color</span> <span className='green'>Game</span></h1>
        </div>

        <div className='score-board'>
          <h1 data-testid='score'>{score}</h1>
        </div>
      </header>

      <section className="game">
      <div className="game-instructions">
        <h2 data-testid='gameInstructions'>Guess The Color</h2>
      </div>

      <div className="game-status">
        <h2 data-testid='gameStatus' 
        className={gameStatus === win ? 'win' : gameStatus === lose ? 'lose' : gameStatus === startOver ? 'startOver' : '' }>{gameStatus}</h2>
      </div>

      <div data-testid='colorBox' className='target-color' style={{backgroundColor: targetColor}}>
        
      </div>

      <div  className="color-options">
        {
          colors.map((color, index) => 
            (<div 
              key={index}
              data-testid='colorOption' 
              className='color-option' 
              style={{backgroundColor: color}}
              onClick= {() => handleGuess(color)}></div>))
        }
  
      </div>

      <div onClick={() => {reset()}} className="reset">
        <h1 data-testid='newGameButton'>Reset</h1>
      </div>

      </section>
    </section>
  )
}

export default App