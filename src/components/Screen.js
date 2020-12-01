import React from "react";

const Screen = (props) => {
  return (
    <div className="screen">
      <h1 className="output">{props.output}</h1>
      <h1 className="input">{props.input.join("")}</h1>
    </div>
  );
};

export default Screen;
