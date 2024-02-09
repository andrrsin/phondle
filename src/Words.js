import {ipaanswers} from "./Data";
export const boardDefault = [
      ["", "", "", "", ""]
    , ["", "", "", "", ""]
    , ["", "", "", "", ""]
    , ["", "", "", "", ""]
    , ["", "", "", "", ""]
    , ["", "", "", "", ""]
];

export const generateWordSet = async ()=>{
  let wordSet = new Set(ipaanswers);
  return {wordSet};
}



