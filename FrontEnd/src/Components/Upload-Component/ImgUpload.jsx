import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
function flip1() {
  var card = document.getElementsByClassName("flip-card-inner");
  card[1].style.transform = "rotateY(180deg)";
  var total=document.getElementsByClassName("flip-card");
}
function flip2() {
  var close = document.getElementsByClassName("flip-card-inner");
  close[1].style.transform = "rotateY(0deg)";
}

function ImgUpload() {

  const [newImage, setnewImage] = useState({
    title: '',
    type: '',
    image: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newImage.title);
    formData.append('type', newImage.type);
    formData.append('image', newImage.image);

    axios.post('http://localhost:5000/imgupload', formData)
      .then(res => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Upload Successful',
          showConfirmButton: true,
          confirmButtonColor: "#db334f"
        })
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
    setnewImage({
      title: '',
      type: '',
      image: ''
    })
  }

  const handleChange = (e) => {
    setnewImage({ ...newImage, [e.target.name]: e.target.value });
  }

  const handleImage = (e) => {
    setnewImage({ ...newImage, image: e.target.files[0] });
    console.log(newImage.image);
  }
  return (
    <div className="col-lg-5">
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="upload-form flip-card-front">
            <h1 className="upload-heading">Upload Images</h1>
            <img className="circle-form-img" src="images/giphy2.gif" />
            <button
              className=" btn btn-lg btn-danger button-none mobilebutton"
              onClick={flip1}
            >
              Get started
            </button>
          </div>
          <div class="upload-form flip-card-back">
            <p className="close" onClick={flip2}>
              <i class="fas fa-times"></i>
            </p>
            <h1 class="upload-heading">Upload Images</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div class="input-div">
                <label for="name">Image Title :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="title"
                  value={newImage.title}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div class="input-div">
                <label for="name">Image Type :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Type"
                  name="type"
                  value={newImage.type}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div class="input-div">
                <label for="image">Upload Image :</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImage}
                  required />
              </div>
              <div>
                <button
                  type="submit"
                  class=" btn btn-lg btn-danger button-none mobilebutton"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImgUpload;
