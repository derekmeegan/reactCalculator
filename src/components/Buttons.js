import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <div className="buttonCol1">
        <div className="buttonRow">
          <button value="1" onClick={props.inputTextHandler}>
            1
          </button>
          <button value="2" onClick={props.inputTextHandler}>
            2
          </button>
          <button value="3" onClick={props.inputTextHandler}>
            3
          </button>
        </div>
        <div className="buttonRow">
          <button value="4" onClick={props.inputTextHandler}>
            4
          </button>
          <button value="5" onClick={props.inputTextHandler}>
            5
          </button>
          <button value="6" onClick={props.inputTextHandler}>
            6
          </button>
        </div>
        <div className="buttonRow">
          <button value="7" onClick={props.inputTextHandler}>
            7
          </button>
          <button value="8" onClick={props.inputTextHandler}>
            8
          </button>
          <button value="9" onClick={props.inputTextHandler}>
            9
          </button>
        </div>
        <div className="buttonRow space">
          <button value="0" id="space" onClick={props.inputTextHandler}>
            0
          </button>
          <button value="," onClick={props.inputTextHandler}>
            ,
          </button>
        </div>
      </div>
      <div className="buttonCol2">
        <div className="buttonRow">
          <button value="Math.sqrt" onClick={props.inputTextHandler}>
            sqrt
          </button>
          <button value="1/" onClick={props.inputTextHandler}>
            1/x
          </button>
          <button value="+" onClick={props.inputTextHandler}>
            +
          </button>
        </div>
        <div className="buttonRow">
          <button value="-" onClick={props.inputTextHandler}>
            -
          </button>
          <button value="*" onClick={props.inputTextHandler}>
            x
          </button>
          <button value="/" onClick={props.inputTextHandler}>
            /
          </button>
        </div>
        <div className="buttonRow">
          <button value="(" onClick={props.inputTextHandler}>
            (
          </button>
          <button value=")" onClick={props.inputTextHandler}>
            )
          </button>
          <button value="Math.pow(" onClick={props.inputTextHandler}>
            exp
          </button>
          <div className="buttonRow">
            <button value="del" onClick={props.inputTextHandler}>
              del
            </button>
            <button value="clear" onClick={props.inputTextHandler}>
              cls
            </button>
            <button value="calc" onClick={props.outputTextHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
