import React from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Frame = (props) => {
  const inputTextHandler = (e) => {
    if (e.target.value === "clear") {
      props.resetList();
      props.resetOutput();
    } else if (e.target.value === "del") {
      props.setInput([...props.input].slice(0, -1));
    } else if (e.target.value === "+/-") {
      let prev = props.input[props.input.length - 1];
      if (prev === "-") {
        props.setInput([...props.input].slice(0, -1));
      } else {
        for (let i = props.input.length - 1; i > -1; i--) {
          if (i === 0) {
            props.setInput([...props.input].unshift("-"));
            break;
          }
        }
      }
    } else if (props.calc === true) {
      props.calcy();
      props.setInput([...props.input].concat(e.target.value));
    } else {
      props.setInput([...props.input].concat(e.target.value));
    }
  };
  const outputTextHandler = () => {
    const answer = `${props.input.join("")} = ${eval(
      props.input.join("")
    ).toString()}`;
    props.setOutput(answer);
    props.calcy();
  };
  return (
    <div className="frame">
      <h2>
        <b>React Calculator</b>
      </h2>
      <Screen
        input={props.input}
        setInput={props.setInput}
        output={props.output}
        setOutput={props.setOutput}
        initialList={props.initialList}
        resetList={props.resetList}
        resetOutput={props.resetOutput}
        calc={props.calc}
        calcy={props.calcy}
      />
      <Buttons
        outputTextHandler={outputTextHandler}
        input={props.input}
        inputTextHandler={inputTextHandler}
        setInput={props.setInput}
        calc={props.calc}
        calcy={props.calcy}
      />
    </div>
  );
};

export default Frame;
