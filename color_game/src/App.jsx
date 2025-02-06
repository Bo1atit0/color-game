import './App.css';
import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease-in-out',
    });
  })

  //Variables
  const win = 'Yayy I won!!🎉';
  const lose = 'Wrong! Try again. ❌'
  const startOver = 'Start Over';
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black']

  // UseState
  const [animateScore, setAnimateScore] = useState(false)
  const [alarm, setAlarm] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('')
  
  
  // Functions
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)]
  const [targetColor, setTargetColor] = useState(randomColor())

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
      setScore(score => Math.max(0, score - 1))
      setTimeout(() => {setGameStatus('')}, 3000)
    }
  }

  const reset = () => {
    setScore(0)
    setGameStatus(startOver)
    setTimeout(() => {setGameStatus('')}, 1500)
  }
  
  
  useEffect (() => {
    if (score !== 0) {
      setAnimateScore(true)
      setAlarm(false)
      const timer = setTimeout(() => {setAnimateScore(false)}, 2000);
      return () => clearTimeout(timer)
    } else {
      setAlarm(true)
    }
  }, [score])
  return (
    <section>
      <header>
        <div>
          <h1 data-aos='fade-right'><span className='purple'>My</span> <span className='red'>Color</span> <span className='green'>Game</span></h1>
        </div>

        <div data-aos='fade-left' className='score-board'>
          <h1 className={animateScore ? 'animateScore' : alarm ? 'alarm' : ''} data-testid='score'>{score}</h1>
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