import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from './Words';
import { ipaanswers } from './Data';
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
  function getRandomWord() {
    let ans = ipaanswers[getRandomInt(ipaanswers.length)];
    console.log(ans);
    let index = -1;
    let newWord = ["", "", "", "", ""];
    if (ans.includes("ː")) {
      index = ans.indexOf("ː");
  
      for (let i = 0; i < index - 1; i++)
        newWord[i] = ans.charAt(i);
      newWord[index - 1] = ans.charAt(index - 1) + "ː";
      for (let i = index; i < ans.length - 1; i++)
        newWord[i] = ans.charAt(i + 1);
      
    } 
    else {
      newWord = ans.split("");
      
    }
    console.log(newWord);
    return newWord;
  }
  const [correctWord, setCorrectWord] = useState("");
  console.log(correctWord);
 
  const [wordSet, setWordSet] = useState(new Set());

 

  useEffect(() => {
    generateWordSet().then((words) =>{ 
      setWordSet(words.wordSet);
      setCorrectWord(getRandomWord());
    });

  }, [setWordSet])

  


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
