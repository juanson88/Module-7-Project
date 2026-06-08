import React, { useEffect, useState } from "react";
import "./MovieCard.css";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <div className="container">
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie-card">
              <div className="movie-card__container">
                <img className="movie__img" src={movie.Poster} />
                <h3>{movie.Title}</h3>
                <p>
                  <b>Year:</b> {movie.Year}
                </p>
                <p>
                  <b>Type:</b> {movie.Type}
                </p>
                <p>
                  <b>imdbID:</b> {movie.imdbID}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
