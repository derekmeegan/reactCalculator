import React from "react";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Frame = (props) => {
  const inputHandler = (e) => {
    if (e.target.value === "cls") {
      props.reset();
    } else if (e.target.value === "del") {
      props.setInput([...props.input].slice(0, -1));
    } else if (e.target.value === "ans") {
      props.setInput([...props.input].concat(props.ans));
    } else if (props.calc === true) {
      props.calcy();
      props.setInput([...props.input].concat(e.target.value));
    } else {
      props.setInput([...props.input].concat(e.target.value));
    }
  };
  const outputHandler = () => {
    let input = props.input.join("");
    props.setAns(eval(input).toString());
    props.setOutput(`${input} = ${eval(input).toString()}`);
    props.calcy();
  };
  return (
    <div className="frame">
      <h2>React Calculator</h2>
      <Screen input={props.input} output={props.output} />
      <Buttons outputHandler={outputHandler} inputHandler={inputHandler} />
    </div>
  );
};

export default Frame;
