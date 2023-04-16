import React from "react";
import Home from "./Home-Component/Home";
import TaskStudent from "./Home-Component/Task-Component/TaskStudent";
import Review from "./Home-Component/Review";
import Navbar from "../Navbar";
import Footer from "./Home-Component/Footer";
function StudentHome() {
  return (
    <div>
      <Home />
      <TaskStudent />
      <Review />
      <Footer/>
    </div>
  );
}

export default StudentHome;
