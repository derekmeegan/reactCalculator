import "./App.css";
import Frame from "./components/Frame";
import { React, useState } from "react";

let initialList = [];

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState(initialList);
  const [calc, setCalc] = useState(false);
  const resetList = () => {
    initialList = [];
    setInput(initialList);
  };
  const resetOutput = () => {
    setOutput("");
  };
  const calcy = () => {
    setCalc(!calc);
    if (!calc) {
      resetList();
    }
  };
  return (
    <div className="item">
      <Frame
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        resetList={resetList}
        resetOutput={resetOutput}
        calc={calc}
        calcy={calcy}
        initialList={initialList}
      />
    </div>
  );
}

export default App;
