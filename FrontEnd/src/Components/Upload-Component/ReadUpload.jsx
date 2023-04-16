import React, { useState } from "react";
import axios from "axios";
import SentenceInput from "./SentenceInput";
import Swal from "sweetalert2";

function flip1() {
    var card = document.getElementsByClassName("flip-card-inner");
    card[0].style.transform = "rotateY(180deg)";
}
function flip2() {
    var card = document.getElementsByClassName("flip-card-inner");
    card[0].style.transform = "";
}
function ReadUpload() {
    const [title, setTitle] = useState("");
    const [sentences, setSentences] = useState([]);
    const [images, setImages] = useState([]);
    const [audios, setAudios] = useState([]);
    // const [newStory, setNewStory] = useState({
    //   title: "",
    //   images: [],
    // });
    // const handleImages = (e) => {
    //   const files = Array.from(e.target.files);
    //   files.forEach((file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //       setImages((oldArray) => [...oldArray, reader.result]);
    //     };
    //   });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(sentenceSections);
        //  return;
        await axios
            .post("http://localhost:5000/storyupload", { title, sentenceSections})
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "Upload Successful",
                    showConfirmButton: true,
                    confirmButtonColor: "#db334f",
                });
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
        // setNewStory({
        //   title: "",
        //   images: [],
        // });
        setTitle("");
        setSentenceSections([]);
    };

    let newSection = {
        key: 0,
        sentence: "",
        image: null,
        audio: null
    };

    const [sentenceSections, setSentenceSections] = useState([]);

    let [newSectionAdding, setNewSectionAdding] = useState(false);

    const handleAddSection = (e) => {
        e.preventDefault();
        if(newSectionAdding){
            return;
        }
        newSection = Object.assign(newSection, {key: sentenceSections.length})
        setSentenceSections([...sentenceSections, newSection]);
        setNewSectionAdding(true);
    }

    const saveSection = (section) => {
        let sections = [...sentenceSections];
        sections[section.key] = {...section};
        setSentenceSections(sections);
        setNewSectionAdding(false);
    };

    

    return (
        <div className="col-lg-5 ">
            <div className="flip-card ">
                <div className="flip-card-inner">
                    <UploadIntroSection/>
                    <UploadEditSection onStorySubmit={handleSubmit} onAddSection={handleAddSection}
                        title={title} sections={sentenceSections} setTitle={setTitle} saveSection={saveSection}
                    />
                </div>
            </div>
        </div>
    );
}

const UploadIntroSection = (props) => {
    return (
        <div className="upload-form flip-card-front">
            <h1 class="upload-heading">Upload Story</h1>
            <img className="circle-form-img" src="images/giphy.gif" />
            <button
                className=" btn btn-lg btn-danger button-none mobilebutton"
                onClick={flip1}
            >
                Get Started
            </button>
        </div>
    );
};

const UploadEditSection = (props) => {
    return (
        <div className="upload-form flip-card-back">
            <p className="close" onClick={flip2}>
                <i class="fas fa-times"></i>
            </p>
            <h1 class="upload-heading">Upload Story</h1>
            <form enctype="multipart/form-data">
                <TitleSection title={props.title} setTitle={props.setTitle}/>
                {props.sections.map(section => {
                    return <SentenceInput section={section} saveSection={props.saveSection}/>;
                })}
                <div>
                    <button onClick={props.onStorySubmit} className=" btn btn-lg btn-danger button-none mobilebutton">
                        Submit
                    </button>
                    <button onClick={props.onAddSection} className="btn btn-lg btn-danger button-none mobilebutton">
                        <i className="fas fa-plus"></i>More
                    </button>
                </div>
            </form>
        </div>
    );
};

const TitleSection = (props) => {
    return (
        <div className="input-div">
            <label for="name">Image Title :</label>
            <input
                type="text" id="name" placeholder="Name"
                name="title" value={props.title} required
                onChange={(e) => props.setTitle(e.target.value)}
            />
            <hr/>
        </div>
    );
};



export default ReadUpload;
