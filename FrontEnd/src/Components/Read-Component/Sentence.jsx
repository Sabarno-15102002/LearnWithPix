import React from "react";

function Sentence(props) {
  var audio = new Audio(props.audio);
  var play= document.getElementsByClassName('fa-play');
  return (
    <div className="sentence-container">
      <img src={props.src} alt="Hello" />
      <div className="row sentence-component">
        <p classname="sound-para">{props.text}</p>
        <button
          className="play-button"
          onClick={() => {
            if(audio.paused)
            {audio.play();
            }
          }}
        >
          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
  );
}

export default Sentence;
