import React from 'react'

const GameLoseScreen = (props) => {
    return (
      <div>
        <h1>
          Score: {props.playerScore}/ 210
        </h1>
        you Lose, better luck next time :/
      </div>
    )
  }


export default GameLoseScreen
