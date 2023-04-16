import React from "react";
import Card from "./Card";
function Task() {
  return (
    <section id="Task" class="task-bg">
    <div className="waterAnimation">
    <h1 className="taskHeading ">Let's study together</h1>
    <h1 className="taskHeading ">Let's study together</h1>
    </div>
      <div className="row">
      <Card class="col-lg-6" type="chatbot" text="Talk With Me" link="/chatbot"/>
      <Card class="col-lg-6" type="read-student" text="Read Story" link="/read" />
      </div>
    </section>
  );
}

export default Task;
