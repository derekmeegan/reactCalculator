import "./App.css";
import Frame from "./components/Frame";
import { React, useState } from "react";

const App = () => {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState([]);
  const [calc, setCalc] = useState(false);
  const reset = () => {
    setInput([]);
    setOutput("");
  };
  const calcy = () => {
    setCalc(!calc);
    if (!calc) setInput([]);
  };
  return (
    <div className="item">
      <Frame
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        reset={reset}
        calc={calc}
        calcy={calcy}
      />
    </div>
  );
};

export default App;
