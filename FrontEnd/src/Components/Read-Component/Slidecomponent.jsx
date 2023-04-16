import React from "react";

function SlideComponent(props) {
  return (
    <div className={props.className}>
      <img
        className="d-block w-100"
        src={props.imageSrc.src}
        alt="First slide"
      />
    </div>
  );
}

export default SlideComponent;
