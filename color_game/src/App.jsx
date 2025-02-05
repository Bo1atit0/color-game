import './App.css';

import React from 'react'

const App = () => {
  return (
    <section>
      <header>
        <div>
          <h1><span className='purple'>My</span> <span className='red'>Color</span> <span className='green'>Game</span></h1>
        </div>

        <div className='score-board'>
          <h1>0</h1>
        </div>
      </header>

      <section className="game">
      <div className="game-instructions">
        <h2>Guess The Color</h2>
      </div>

      <div className="game-status">
        <h2 className='win lose'>Yaayy!! You Won</h2>
      </div>

      <div className='target-color'>

      </div>

      <div className="color-options">
        <div className="color-option red"></div>
        <div className="color-option green"></div>
        <div className="color-option blue"></div>
        <div className="color-option yellow"></div>
        <div className="color-option purple"></div>
        <div className="color-option black"></div>
      </div>

      <div className="reset">
        <h1>Reset</h1>
      </div>

      </section>
    </section>
  )
}

export default App