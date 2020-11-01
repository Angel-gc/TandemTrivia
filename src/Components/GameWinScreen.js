import React from 'react'

const GameWinScreen = (props) => {
    return (
      <div>
        <h1>
          Score: {props.playerScore}/ 210
        </h1>
        You win! good job
      </div>
    )
  }


export default GameWinScreen
