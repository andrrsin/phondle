import React, { useEffect } from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
function Letter({letterPos,attemptVal}) {
    const {board,correctWord,currAttempt,setDisabledLetters,setAlmostLetters,setCorrectLetters} = useContext(AppContext);
    const letter = board[attemptVal][letterPos]
    const correct = correctWord[letterPos] === letter;
    const almost = !correct && letter !== ""&&correctWord.includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct?"correct":almost?"almost":"error");

    useEffect(()=>{
      if(letter!==""){
        if(!correct&&!almost){
          setDisabledLetters((prev)=>[...prev,letter]);
        }else if(!correct&&almost){
          setAlmostLetters((prev)=>[...prev,letter]);
        }else if(correct){
          setCorrectLetters((prev)=>[...prev,letter]);
        }
  
      }
    },[currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter