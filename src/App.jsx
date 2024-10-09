import css from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  let [val, setVal] = useState("");
  function onClickFun(data) {
    if (data === "C") {
      setVal(val.substring(0, val.length - 1));
    } else if (data === "=") {
      setVal(eval(val));
    } else if (data === "AC") {
      setVal("");
    } else {
      let value = val;
      value += data;
      setVal(value);
    }
  }
  return (
    <div className={css.container}>
      <center>
        <h1>TEZ CALSI</h1>
      </center>
      <Display disVal={val}></Display>
      <ButtonContainer onClickFun={onClickFun}></ButtonContainer>
      <center>
        <p>@Teja_57</p>
      </center>
    </div>
  );
}

export default App;
