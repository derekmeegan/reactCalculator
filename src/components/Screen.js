import React from "react";

const Screen = ({ input, output }) => {
  return (
    <div className="screen">
      <h1 className="output">{output}</h1>
      <h1 className="input">{input.join("")}</h1>
    </div>
  );
};

export default Screen;
