import React from "react";
import Container from "./Container";
function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((story) => {
    return <Container key={story.id} heading={story.title} imgSrc={story.image} />
  });
  return <div>{filtered}</div>;
}

export default SearchList;
