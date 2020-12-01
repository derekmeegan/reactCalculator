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
      <h2>React Calculator</h2>
      <Screen input={props.input} output={props.output} />
      <Buttons
        outputTextHandler={outputTextHandler}
        inputTextHandler={inputTextHandler}
      />
    </div>
  );
};

export default Frame;
