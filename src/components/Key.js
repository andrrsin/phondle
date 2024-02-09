import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
function Key({ keyVal, bigKey,state}) {
  const { board, setBoard, currAttempt, setCurrAttempt, longChar, setLongChar, wordSet,correctWord,setGameOver } = useContext(AppContext);

  const selectLetter = () => {
    //Press enter and change if 5 letters
    if (keyVal === "Enter") {
      if (currAttempt.letterPos !== 5) return;
      let currWord = "";
      for (let i = 0; i < 5; i++) {
        currWord += board[currAttempt.attempt][i];
        
      }

      if (wordSet.has(currWord)) {
        setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        
      }else{
        return;
      }
      
      if(currWord === correctWord.join("")){
        setGameOver({gameOver:true,win:true});
        
        return;
      }
      if(currAttempt.attempt === 5){
        setGameOver({gameOver:true,win:false});
        return;
      }

    } else if (keyVal === "«") { //Delete if a letter
      if (currAttempt.letterPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    } else if (keyVal === "ː") { //Long vowels
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
    <div className='key' id={bigKey ?"big":state?state:""} onClick={selectLetter}>
      {keyVal === "«" ? <BackspaceOutlinedIcon /> : keyVal}</div>
  )
}

export default Key