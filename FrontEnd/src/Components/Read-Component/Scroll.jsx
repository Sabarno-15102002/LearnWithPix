import React from "react";

const Scroll = (props) => {
  return (
    <div
      className={props.className}
      style={{
        overflowY: "scroll",
        height: "100vh",
        scrollbarColor: "dark",
        overflowX: "hidden"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
