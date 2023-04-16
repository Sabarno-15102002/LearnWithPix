import React from "react";
import CreateButton from "./CreateButton";
import html2canvas from "html2canvas";
import AudioRecorder from "./AudioRecorder";

function image() {
  var div = document.getElementById('story-div-container');
  div.style.display = "block";
  var div1 = document.getElementById('audio-div');
  div1.style.display = "none";
  var image = document.getElementById('image');
  image.classList.add('btn-danger');
  image.classList.remove('btn-light');
  var audio = document.getElementById('audio');
  audio.classList.add('btn-light');
  audio.classList.remove('btn-danger');
}
function audio() {
  var div = document.getElementById('story-div-container');
  div.style.display = "none";
  var div1 = document.getElementById('audio-div');
  div1.style.display = "block";
  var image = document.getElementById('image');
  image.classList.add('btn-light');
  image.classList.remove('btn-danger');
  var audio = document.getElementById('audio');
  audio.classList.add('btn-danger');
  audio.classList.remove('btn-light');
  
}

function ZoomIn() {
  var customDiv = document.getElementById("story-div");
  if (customDiv.lastChild != null) {
    var height = customDiv.lastChild.style.height;
    var heightInt = parseInt(height.substring(0, height.length - 2));
    heightInt -= 10;
    console.log(height);
    customDiv.lastChild.style.height = heightInt + "px";
  }
}
function ZoomOut() {
  var customDiv = document.getElementById("story-div");
  if (customDiv.lastChild != null) {
    var height = customDiv.lastChild.style.height;
    var heightInt = parseInt(height.substring(0, height.length - 2));
    heightInt += 10;
    console.log(height);
    customDiv.lastChild.style.height = heightInt + "px";
  }
}
function download() {
  let canvasPromise = html2canvas(document.getElementById("story-div"), {
    // allowTaint: true,
    useCORS: true
  });
  canvasPromise.then(function (canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    anchorTag.download = prompt('Save As');
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = "_blank";
    anchorTag.click();
  });
}
// FileSaver saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom });

function refresh() {
  var customDiv = document.getElementById("story-div");
  customDiv.replaceChildren();
}
function undo() {
  var customDiv = document.getElementById("story-div");
  if (customDiv.lastChild != null) customDiv.lastChild.remove();
}
function left() {
  var customDiv = document.getElementById("story-div");
  if (customDiv.lastChild != null) {
    var margin = customDiv.lastChild.style.marginLeft;
    var marginInt = parseInt(margin.substring(0, margin.length - 2));
    marginInt -= 10;
    console.log(marginInt);
    customDiv.lastChild.style.marginLeft = marginInt + "px";
  }
}
function right() {
  var customDiv = document.getElementById("story-div");
  if (customDiv.lastChild != null) {
    var margin = customDiv.lastChild.style.marginLeft;
    var marginInt = parseInt(margin.substring(0, margin.length - 2));
    marginInt += 10;
    console.log(marginInt);
    customDiv.lastChild.style.marginLeft = marginInt + "px";
  }
}
var node = document.getElementById("story-div");
function CustomDiv() {
  return (
    <div class="col-lg-8 create-page-container-item">
      <button type="button" id="image" className="btn btn-lg btn-danger button-none" onClick={image}>Image</button>
      <button type="button" id="audio" className="btn btn-lg btn-light button-none" onClick={audio}>Audio</button>
      <div id="story-div-container">
      <div id="story-div"></div>
      <CreateButton onClick={left} text="Move left (a)" class="fas fa-long-arrow-left" />
      <CreateButton onClick={right} text="Move right (d)" class="fas fa-long-arrow-right" />
      <CreateButton onClick={ZoomIn} text="Zoom-Out (-)" class="fas fa-minus" />
      <CreateButton onClick={ZoomOut} text="Zoom-In (+)" class="fas fa-plus" />
      <CreateButton onClick={refresh} text="Clear" class="fas fa-refresh" />
      <CreateButton onClick={undo} text="Undo" class="fas fa-undo" />
      <CreateButton onClick={download} text="Download" class="fas fa-download" />    
      </div>
      <div id="audio-div">
      <AudioRecorder />
      </div>
     </div>
  );
}
export default CustomDiv;
