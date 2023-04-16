import React from "react";

function SlideOtherPages(props) {
  return (
    <div class="carousel-item">
      <img class="d-block w-100" src={props.imageSrc} alt="New slide" />
    </div>
  );
}

export default SlideOtherPages;
