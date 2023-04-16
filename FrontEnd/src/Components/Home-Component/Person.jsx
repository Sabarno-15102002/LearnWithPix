import React from "react";

function Person(props) {
  return (
    <div class={props.class}>
      <h2>{props.review}</h2>
      <img class="testimonial-images"  src={props.image} alt="person-img" />
      <em className="reviewer">{props.name}</em>
      {/* <span>⭐⭐⭐⭐⭐</span> */}
    </div>
  );
}
export default Person;
