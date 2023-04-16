import React from "react";
import Card from "./Card";
function Task() {
  return (
    <section id="Task" class="task-bg">
    <div className="waterAnimation">
    <h1 className="taskHeading ">Let's study together</h1>
    <h1 className="taskHeading ">Let's study together</h1>
    </div>
      <div className="row ">
        <Card class="col-lg-4" type="create" text="Create Story" link="/create" />
        <Card class="col-lg-4" type="read" text="Read Story" link="/read" />
        <Card class="col-lg-4" type="upload" text="Upload Story" link="/upload" />
      </div>
    </section>
  );
}

export default Task;
