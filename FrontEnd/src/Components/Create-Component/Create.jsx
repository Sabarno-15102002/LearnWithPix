import React from "react";
import SearchItem from "./SearchItem";
import CustomDiv from "./CustomDiv";
import Instruction from "./Instruction"
function Create() {
  return (
    <div>
      <h1 className="createHeading">Let's Create Stories</h1>
      <Instruction/>
      <div className="row create-page-container">
        <SearchItem />
        <CustomDiv />
      </div>
    </div>
  );
}

export default Create;
