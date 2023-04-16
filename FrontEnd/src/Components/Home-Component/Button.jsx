import React from "react";

function Button(props) {
  return (
    <button type="button" style={props.style} class=" btn btn-lg btn-outline-light button-none mobilebutton">
       <a href={props.link}>{props.text}</a>
    </button>
  );
}

export default Button;
