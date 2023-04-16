import React, { useEffect, useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Search1({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const filteredPersons = details.filter((stories) => {
    return stories.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(searchField);
    if(e.target.value==="" || e.target.value==" "){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  useEffect(()=>{
    setSearchField(transcript[transcript.length-1]==='.'?transcript.substring(0,transcript.length-1):transcript);
    if(transcript.length>0)
    {
      setSearchShow(true);
    }
  },[transcript]);
  function searchList() {
    if (searchShow) {
      return (
        <div className="read-scroll">
            <SearchList filteredPersons={filteredPersons} />
        </div>
      );
    }
  }


  return (
    <section>
      <div>
        <input
          className="searchItems"
          id="story-search"
          type="search"
          placeholder="Search Story"
          onChange={handleChange} 
          name="eng-input"
           value={searchField}
        />
      <button onClick={SpeechRecognition.startListening} className="smallButton"><i class="fas fa-microphone"></i></button>
      <button onClick={SpeechRecognition.stopListening} className="smallButton"><i class="fas fa-microphone-alt-slash"></i></button>
      <button onClick={resetTranscript} className="smallButton"><i class="fas fa-undo"></i></button>
      {/* <p>{transcript}</p> */}
      <p className="voice-update"> {listening ? 'listening, please speak...' : 'Speak Something'}</p>
      </div>
      {searchList()}
    </section>
  );
}

export default Search1;