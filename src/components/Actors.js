import React from "react";
import { actors } from "../data";

function Actors() {
  const renderEachActor = actors.map((actor) => {
    console.log(actor);
    return (
      <div key={actor.name}>
        <h3> Name: {actor.name}</h3>
        Movies:
        <ul>
          {actor.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {renderEachActor}
    </div>
  );
}

export default Actors;
