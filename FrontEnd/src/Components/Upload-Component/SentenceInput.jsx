import React, { useState } from "react";

const SentenceInput = (props) => {
    let [editEnabled, setEditEnabled] = useState(!(props.section.sentence && props.section.image && props.section.audio));
   
    const key = props.section.key;
    let [sentence, setSentence] = useState(props.section.sentence || "");
    let [image, setImage] = useState(props.section.image);
    let [audio, setAudio] = useState(props.section.audio);

    const saveChanges = () => {
        setEditEnabled(false);
        let newSectionInput = {
            key: key,
            sentence: sentence,
            image: image,
            audio: audio
        }
        props.saveSection(newSectionInput);
    };

    const resetInput = () => {

    };

    const editSection = () => {
        setEditEnabled(true);
    };

    const processImageInput = (image) => {
        const files = Array.from(image?.files);
        console.log(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            setImage({
                fileName: files[0].name,
                content: reader.result
            });
        }
    };

    const processAudioInput = (audio) => {
        const files = Array.from(audio?.files);
        console.log(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            setAudio({
                fileName: files[0].name,
                content: reader.result
            });
        }
    };

    if(editEnabled){
        return (
            <div>
                <input type="text" placeholder="Enter Sentence" value={sentence} onChange={e=>setSentence(e.target.value)}/>
                <input type="file" name="Audio" accept="audio/mp3" onChange={e=>processAudioInput(e.target)}/>
                <input type="file" name="Image" accept=".jpg, .jpeg, .png" onChange={e=>processImageInput(e.target)}/>
                <button className="btn btn-success" onClick={saveChanges}>✔</button>
                <button className="btn btn-danger" onClick={resetInput}>❌</button>
                <hr/>
            </div>
        );
    } else {
        return (
            <div>
                <button className="btn btn-success" onClick={editSection}>⚙</button>
                <span>{sentence}</span>
                <span>🎵 {audio?.fileName}</span>
                <span>🖼 {image?.fileName}</span>
                <hr/>
            </div>
        );
    }
}

export default SentenceInput;