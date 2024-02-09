import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import { ipadict } from '../Data';
function GameOver() {
    function keyByValue(appObj, value) {
        const [key] = Object.entries(appObj).find(([key, val]) => val === value) || [];
        return key || null;
     }
    const{gameOver,correctWord,currAttempt} = useContext(AppContext);
    const word = keyByValue(ipadict,correctWord.join(""));
  return (
    <div className='gameOver'>
        <h3>{gameOver.win?"You won":"Better luck next time!"}</h3>
        <h1>The correct word was: {word} /{correctWord}/</h1>
        {gameOver.win && (<h3>It took you {currAttempt.attempt} {currAttempt.attempt===1?"attempt":"attempts"}</h3>)}
    </div>
  )
}

export default GameOver