import React, { useEffect, useState } from "react";
import Person from "./Person";
import Button from "./Button";
import axios from "axios";
import { Buffer } from "buffer";

function Review() {
  const [reviewArr,setReviewArr]= useState([]);
  useEffect(()=>{
      axios.get("http://localhost:5000/getreview").then((res)=>{
        console.log(res.data.userReview);
        res.data.userReview.forEach((review) => {
          let imgUrl = new Buffer.from(review.avatar.data).toString("base64"); 
          setReviewArr(prevState => [...prevState,
            {
                name: review.name,
                avatar: "data:image/png;base64,"+imgUrl,
                bio : review.bio,
                rating: review.rating,
                review: review.review,
                id: review._id
            }]);
        });
      }).catch((err)=>{
        console.log(err);
      })
  },[])
  return (
    <section id="testimonial">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <Person
            class="carousel-item active"
            name="Lorem Ipsum"
            image="images/read.jpg"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
          />
          {reviewArr.length>0 && reviewArr.map((rev)=>{
            return <Person
            class="carousel-item "
            name={rev.name}
            image={rev.avatar}
            review={rev.review}
          />
          })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <Button text="Add Review" link="/review" />
    </section>
  );
}
export default Review;
