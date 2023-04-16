import React, { useState } from "react";
import Slidestory from "../Read-Component/Slidedstory";

function Container(props) {
  const [isClicked, setOnClicked] = useState(false);
  function handleClick() {
    setOnClicked(!isClicked);
  }

  return (
    <div className="read-container-item">
      <h3 className="read-container-item-heading">
        <span>{props.heading}</span>
        <span className="heading-button">
          <button onClick={handleClick} className="smallButton">
            {isClicked ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>}
          </button>
        </span>
      </h3>
      {isClicked && <Slidestory sentences={props.sentences} />}
    </div>
  );
}

export default Container;

/* <div class="read-container-item">
<h3 class="read-container-item-heading">Lal Jhuti kakatua 3 <button class="smallButton">+</button></h3>
<img class="read-container-item-img" src= alt="">
<a href="https://picsum.photos/200/300" download>
    <button type="button" class="download-button">Download</button>
</a>
</div> */
