import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="container">
      <div className="movie-card" key={movie.imdbID}>
        <div className="movie-card__container">
          <img
            className="movie__img"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
          <h3>{movie.Title}</h3>
          <p>
            <b>Year:</b> {movie.Year}
          </p>
          <p>
            <b>Type:</b> {movie.Type}
          </p>
          <p>
            <b>IMDb ID:</b> {movie.imdbID}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
