import React, { useState } from "react";
import axios  from "axios"
function AddReview() {
  
  const [newReview,setReview]=useState({
    name:"",
    bio: "",
    avatar:"",
    rating: "",
    review: ""
  });
  const handleChange= (e)=>{
    setReview({ ...newReview,[e.target.name]: e.target.value})
  }
  const handleImage=(e)=>{
    setReview({ ...newReview,avatar: e.target.files[0]});
    console.log(newReview.avatar);
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      const formData= new FormData();
      formData.append("name",newReview.name);
      formData.append("bio",newReview.bio);
      formData.append("avatar",newReview.avatar);
      formData.append("rating",newReview.rating);
      formData.append("review",newReview.review);

      axios.post("http://localhost:5000/uploadreview",formData).then((res)=>{
            console.log(res);
      }).catch((err)=>{
            console.log(err);
      })
  }
  return (
    <div className="review-container">
      <form action="/upload" onSubmit={handleSubmit} encType="multipart/form-data">
        <div class="input-div">
          <label for="name">Name :</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            autoComplete="off"
            value={newReview.name}
            onChange={handleChange}
            required
          />
        </div>
        <div class="input-div">
          <label for="name">Short Bio :</label>
          <input
            type="text"
            id="bio"
            placeholder="Bio"
            name="bio"
            value={newReview.bio}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div class="input-div">
          <label for="avatar">Avatar :</label>
          <input type="file" id="avatar" name="avatar" onChange={handleImage} required />
        </div>
        <div class="input-div">
          <label for="rating">Rating (1-5) :</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            value={newReview.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div class="input-div">
          <label for="review">Review (60 words):</label>
          <br />
          <textarea name="review" cols="35" rows="5" 
            onChange={handleChange}
            value={newReview.review}
          ></textarea>
        </div>

        <div class="input-div">
          <button
            type="submit"
            class=" btn btn-lg btn-danger button-none mobilebutton"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddReview;
