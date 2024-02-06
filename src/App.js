import './App.css';
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { createContext, useState } from "react";
import { boardDefault } from './Words';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [longChar, setLongChar] = useState(false);
  let correctWord = "buːmɪŋ";
  let index = -1;
  let newWord = ["","","","",""]; 
  if(correctWord.includes("ː")){
    index = correctWord.indexOf("ː");
    
    for(let i = 0;i < index-1;i++)
      newWord[i]=correctWord.charAt(i);
    newWord[index-1] = correctWord.charAt(index-1)+"ː";
    for(let i = index;i < correctWord.length-1;i++)
      newWord[i]=correctWord.charAt(i+1);
    correctWord = newWord;
}

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
        correctWord
      }}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
