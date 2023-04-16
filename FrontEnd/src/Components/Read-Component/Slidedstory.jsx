import React, { useState } from "react";
import Sentence from "./Sentence";

function Slidestory(props) {
  const [current, setCurrent] = useState(0);
  const length = props.sentences.length;
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div id="inner" className="carousel-inner">
        {props.sentences.map((sentence, index) => (
          <div
            className={
              index === current
                ? "carousel-item  active "
                : "carousel-item "
            }
            key={index}
          >
            <Sentence src={sentence.section.image.url} text={sentence.section.sentence} audio={sentence.section.audio.url}/>
            {/* <img className="d-block w-100" src={img.url} alt="Second slide" /> */}
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon control"
          aria-hidden="true"
        ></span>
        <span className="sr-only" aria-hidden="false">
          Previous
        </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon control"
          aria-hidden="true"
        ></span>
        <span className="sr-only" aria-hidden="false">
          Next
        </span>
      </a>
    </div>
  );
}

export default Slidestory;
