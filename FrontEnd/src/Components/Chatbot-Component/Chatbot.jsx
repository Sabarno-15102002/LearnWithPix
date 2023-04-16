import React from "react";

function display()
{
  var chat=document.getElementsByClassName('chat-screen');
  var left=document.getElementsByClassName('chatbot-left');
  left[0].style.display="none";
  chat[0].style.display="block";
  chat[0].classList.add('fade-in');
}

function Chatbot()
{
    const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  chatContainer.classList.add("darker");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("lighter");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    else if (message.includes('Hay')) {
        speech.text = "Hello. Nice to meet you!";
      }

    else if (message.includes('website is not working')) {
        speech.text = "There may be some network issues,check your connection!";
      }
    
    else if (message.includes('how to read ') || message.includes('poem')) {
        speech.text = "Go to homepage, then click on read,then search the story by speaking.";
      }
    
    else   if (message.includes(' write the story')  ) {
        speech.text = "You are a student, you don't have permission for this.";
      }
    
    else  if (message.includes('is not working')) {
        speech.text = "Reload the site";
      }
    
    else if (message.includes('fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }
    else {
      window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
      const finalText = "I found some information for " + message + " on google";
      speech.text = finalText;
  }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

function recording(){
  recorder.start();
}

    return <div className="row chat-section">
      <div className="col-lg-6 chatbot-left">
        <img className="chatbot-img" src="images/Chatbot.gif"/>
        <h1 className="anim-typewriter">Ask me about the issues</h1>
        <p>Talk with me, if you want to know something about the website</p>
        <button className="btn btn-lg mobilebutton btn-danger chatbot-btn"  onClick={display}>Ask now</button>
      </div>
      <div className="col-lg-6 chat-screen" id="container">
        <div className="Chat-nav">
        <i class="fas fa-robot robot"></i>
          <h3>Ask Queries <i class="fas fa-comments"></i></h3>
        </div>
        <a href="#" className="voice" onClick={recording}><i className="fas fa-microphone"></i></a>
        <div class="chat-container darker ">
            <p class="voice2text">Hi there</p>
        </div>

        <div class="chat-container lighter">
            <p class="voice2text">Hello back</p>
        </div>
    </div>
    </div>
}

export default Chatbot;