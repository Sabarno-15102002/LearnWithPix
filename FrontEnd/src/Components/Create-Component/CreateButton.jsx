import React from "react";

function CreateButton(props) {
  return (
    <div className="editor-btn-div">
      <button onClick={props.onClick} type="button" className="editor-button btn btn-lg btn-light">
      {props.name}
      <i className={props.class}></i>
    </button>
    <p class="hide">{props.text}</p>
    </div>
  );
}
export default CreateButton;

{/* <div>
     <button type="button" className="editor-button btn btn-lg btn-light">
      {props.name}
      <i className={props.class}></i>
      <span class="tooltiptext">Tooltip text</span>
    </button>
    </div> */}
