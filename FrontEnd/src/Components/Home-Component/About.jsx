import React from "react";
import paraArr from "./paragraph";
import Footer from "./Footer";
function About() {
  return (
    <section id="About">
      <div className="aboutSection ">
        <h1 className="aboutHeading anim-typewriter">Why this website?</h1>
        <img className="aboutImage fade-in" src="images/About.jpg" alt="about-jpg" />
        <div className="slide-up delay">
        <p className="aboutPara-first ">{paraArr.para1}</p>
        <p className="aboutPara-second ">{paraArr.para2}</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
export default About;
