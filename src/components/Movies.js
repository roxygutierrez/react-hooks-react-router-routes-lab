import React from "react";
import { movies } from "../data";

function Movies() {
  const renderEachMovie = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2> Name: {movie.title}</h2>
        <p> Run Time: {movie.time} minutes</p>
        Genres:
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {renderEachMovie}
    </div>
  );
}

export default Movies;
