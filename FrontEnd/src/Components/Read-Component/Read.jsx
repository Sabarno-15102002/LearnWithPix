import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from 'buffer';
import Container from "./Container";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Read() {
  const [imgArr, setImgArr] = useState([]);
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
  useEffect(() => {
    axios.get("http://localhost:5000/storyupload").then((response) => {
          response.data.story.forEach((storyData) => {
            console.log(storyData.sections);
      setImgArr(prevState => [...prevState, {title: storyData.title, sentences: storyData.sections, id: storyData._id}]);
          });
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  useEffect(()=>{
    setSearchField(transcript[transcript.length-1]==='.'?transcript.substring(0,transcript.length-1):transcript);
    if(transcript.length>0)
    {
      setSearchShow(true);
    }
  },[transcript]);

  return (
    <div>
    <h1 className="readHeading">Let's read stories</h1>
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
      <p className="voice-update"> {listening ? 'listening, please speak...' : 'Speak Something'}</p>
      </div>
      <div className="read-scroll">
      {/* {imgArr.length>0 && imgArr.map((arr)=>{
        var source=arr.name.toLowerCase();
        var target=searchField.toLowerCase();
       return source.includes(target) && target!="" && target!=" " ? <Container key={arr._id} heading={arr.name} imgSrc={arr.storyArr} />:null;
      })} */}
      {imgArr.length>0 && imgArr.map((story)=>{
        var source=story.title.toLowerCase();
        var target=searchField.toLowerCase();
        return source.includes(target) && target!="" && target!=" " ? <Container key={story.id} heading={story.title} sentences={story.sentences}/>:null;
      })
      }
      </div>
    </div>
  );
}
export default Read;

{/* { initialDetails.map((story)=>{
    return <Container key={story.id} heading={story.title} imgSrc={story.image} />
   })} */}
