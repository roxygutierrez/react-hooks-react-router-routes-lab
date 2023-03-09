import React from "react";
import { directors } from "../data";

function Directors() {
  const renderEachDirector = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>Name: {director.name} </h3>
        Movies:
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}> {movie} </li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {renderEachDirector}
    </div>
  );
}

export default Directors;
