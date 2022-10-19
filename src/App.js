import React from "react";
import "./App.css";
import { useState } from "react";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import Nav from "./components/nav";
import BottomLine from "./components/bottomLine";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

function App() {
  
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })


  const handleClick = (e) => 
  {
    //   if (result === "0" && e.target.innerHTML == "0") {
    //     setResult(Number(result) + Number(e.target.innerHTML));
    //   } else if (result == "0") {setResult( e.target.innerHTML )}
    //   else setResult(result + e.target.innerHTML);
    setCalc({...calc, 
      num: calc.num == 0 && e.target.innerHTML == "0" ? "0" : calc.num.toString()% 1 == 0 ? String(Number(calc.num.toString() + e.target.innerHTML)) : String(calc.num + e.target.innerHTML),
      res: !calc.sign ? 0 : calc.res
    })
  }
  
  const signClick = (e) => {
    setCalc({...calc, 
      res: calc.num && !calc.res ? calc.num : calc.res,
      num: 0,
      sign: e.target.innerHTML, 

    })
  }

  const clear = () => {
    setCalc({...calc, 
      sign: "",
      num: 0,
      res: 0
    })
  }

  const backspace = () => {
      setCalc({...calc, 
        num : calc.num.toString().slice(0, calc.num.toString().length - 1),
        res: calc.res.toString().slice(0, calc.res.toString().length - 1)
      })
  }
  
  const equalsTo = () => {
    // if(e.target.innerHTML === "equalsTo") {
    //   setAnswer(eval(result))
    // }
    if (calc.num && calc.sign) {
      const math = (a, b, sign) =>
      sign === "+" ? a + b : sign === "-" ? a - b : sign === "*" ? a * b : sign === "/" ? a / b : a % b;
      setCalc({...calc, 
        sign: "",
        num: 0,
        res: String(math(Number(calc.res.toString()), Number(calc.num.toString()), calc.sign))
      })
    }
      
    }
    

      const dotClick = (e) => {
       setCalc({...calc, 
        num: !calc.num.toString().includes(".") ? calc.num + e.target.innerHTML : calc.num , 
        res: !calc.res.toString().includes(".") ? calc.res + e.target.innerHTML : calc.res })
  
        }



  return (
    <div className="box">
      <Nav />
      <Screen  result={calc.num ? calc.num : calc.res} />
      <Keyboard handleClick={handleClick}
      clear ={clear} 
      backspace={backspace}
      equalsTo={equalsTo}
      signClick = {signClick}
      dotClick = {dotClick}/>
      <BottomLine />
    </div>
  );
}


export default App;
