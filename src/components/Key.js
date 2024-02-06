import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt,longChar,setLongChar } = useContext(AppContext);

  const selectLetter = () => {
    //Press enter and change if 5 letters
    if (keyVal === "Enter") {
      if (currAttempt.letterPos !== 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    } else if (keyVal === "«") { //Delete if a letter
      if(currAttempt.letterPos===0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1});
    }else if(keyVal==="ː"){ //Long vowels
      setLongChar(!longChar);
    } else { //Delete
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}</div>
  )
}

export default Key