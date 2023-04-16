import React from "react";
import Button from "../Button";

function Card(props) {
  return (
    <div className={props.class} href={props.link}>
      <div className={"taskCard " + props.type + " taskCardCenter slide-up"}>
        <img
          className="circle"
          src={"images/" + props.type + ".jpg"}
          alt={props.type}
          draggable="false"
        />
        <Button text={props.text} link={props.link} />
      </div>
    </div>
  );
}

export default Card;
