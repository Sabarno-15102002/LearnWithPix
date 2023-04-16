import React from "react";
import Button from "./Button";
function Home(props) {
  return (
    <section id="Home">
      <div className="home">
        <div className="row">
          <div className="col-lg-6">
            <div className="jumbotron">
              <div className="homeContent">
                <h3 className="display-4 mainHeading anim-typewriter">Changing the lives of</h3>
                <h1 className="display-4 mainHeading anim-typewriter delay">Children for good</h1>
              </div>
            </div>
            <div>
              <Button text="Learn More" link="/learnmore" style={{marginBottom:"50px"}}/>
            </div>
          </div>
          <div className="col-lg-6 fade-in">
            <img className="home-img " src="/images/home-bg.jpg" alt="bg-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
