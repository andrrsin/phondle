import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
    const {board,setBoard,currAttempt,setCurrAttempt} = useContext(AppContext);
    const selectLetter = (key) => {
        if (currAttempt.letter > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letter] = key;
        setBoard(newBoard);
        setCurrAttempt({
          attempt: currAttempt.attempt,
          letter: currAttempt.letter + 1,
        });
      };
    return (
        <div className='key' id={bigKey && "big"} onClick={selectLetter}>
            {keyVal}</div>
    )
}

export default Key