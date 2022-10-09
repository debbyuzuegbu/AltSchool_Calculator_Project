import React from "react";
import "./App.css";
import { useState } from "react";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import Nav from "./components/nav";
import BottomLine from "./components/bottomLine";

function App() {
  const [result, setResult] = useState("0");
  const [Answer, setAnswer] = useState(0);

  const handleClick = (e) => {
      if (result[0] === "0") {
        const resultSlice = result.slice(1)
        setResult(resultSlice + e.target.value);
      } else setResult(result + e.target.value);
    }
  

  const clear = () => {
    setResult("0");
    setAnswer("0");
  }

  const backspace = (e) => {
    if(e.target.value === "backspace") {
      setResult(result.slice(0, -1))
    }
  }

  const equalsTo = (e) => {
    if(e.target.value === "equalsTo") {
      setAnswer(eval(result))
    }
  }

  return (
    <div className="box">
      <Nav />
      <Screen  result={result} 
      Answer={Answer}/>
      <Keyboard handleClick={handleClick}
      clear ={clear} 
      backspace={backspace}
      equalsTo={equalsTo}/>
      <BottomLine />
    </div>
  );
}


export default App;
