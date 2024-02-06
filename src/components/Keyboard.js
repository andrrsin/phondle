import React, { useContext } from 'react'
import Key from './Key';
import { AppContext } from '../App';
function Keyboard() {
    let keys1 = ["ɑ", "a", "æ", "ɐ", "ə", "e", "ɛ", "i", "ɪ", "ɔ","ʊ","u","ʌ"]; 
    const keys2 = ["ː","b", "d", "f", "ɡ", "h", "j", "ʒ", "k", "l","m","n","ŋ"];
    const keys3 = ["p", "r", "s", "ʃ", "t", "θ", "ð","v","w","z"];
    const {longChar} = useContext(AppContext);
    if(longChar){
        keys1 = ["ɑː", "a", "æ", "ɐ", "ɜː", "e", "ɛ", "iː", "ɪː", "ɔː","ʊ","uː","ʌ"]; 
    }else{
       keys1 = ["ɑ", "a", "æ", "ɐ", "ə", "e", "ɛ", "i", "ɪ", "ɔ","ʊ","u","ʌ"]; 
    }
    return (
        <div className='keyboard'>
            <div className='line1'>{keys1.map((key) => { return <Key keyVal={key} /> })}</div>
            <div className='line2'>{keys2.map((key) => { return <Key keyVal={key} /> })}</div>
            <div className='line3'>
                <Key keyVal={"Enter"} bigKey={true} />
                {keys3.map((key) => { return <Key keyVal={key} /> })}
                <Key keyVal={"«"} bigKey={true} />
            </div>

        </div>
    )
}

export default Keyboard