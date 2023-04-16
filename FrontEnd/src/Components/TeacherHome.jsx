import React from "react";
import Home from "./Home-Component/Home";
import TaskTeacher from "./Home-Component/Task-Component/TaskTeacher";
import Review from "./Home-Component/Review";
import Footer from "./Home-Component/Footer";
function TeacherHome() {
  return (
    <div>
      <Home />
      <TaskTeacher />
      <Review />
      <Footer/>
    </div>
  );
}

export default TeacherHome;
