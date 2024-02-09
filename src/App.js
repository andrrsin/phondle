import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from './Words';
import { ipaanswers, ipadict } from './Data';
import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [longChar, setLongChar] = useState(false);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, win: false });
  
  // let correctWord = "buːmɪŋ"; //DEV MODE
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const [correctWord, setCorrectWord] = useState(ipaanswers[getRandomInt(ipaanswers.length)]);
  console.log(correctWord);
  let index = -1;
  const [wordSet, setWordSet] = useState(new Set());

  let newWord = ["", "", "", "", ""];

  useEffect(() => {
    generateWordSet().then((words) =>{ 
      setWordSet(words.wordSet);

    });

  }, [setWordSet])

  if (correctWord.includes("ː")) {
    index = correctWord.indexOf("ː");

    for (let i = 0; i < index - 1; i++)
      newWord[i] = correctWord.charAt(i);
    newWord[index - 1] = correctWord.charAt(index - 1) + "ː";
    for (let i = index; i < correctWord.length - 1; i++)
      newWord[i] = correctWord.charAt(i + 1);
    
  } 
  else {
    let newWord = correctWord.split('');
    
  }
  setCorrectWord(newWord);

  return (
    <div className="App">
      <nav>
        <h1>/fəʊndəl/</h1>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        longChar,
        setLongChar,
        correctWord,
        wordSet,
        correctWord,
        disabledLetters,
        setDisabledLetters,
        correctLetters,
        setCorrectLetters,
        almostLetters,
        setAlmostLetters,
        gameOver,
        setGameOver
      }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver?<GameOver/>:<Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
