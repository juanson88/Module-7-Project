import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Movies.css";

const Home = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(title);

  function onSearch() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies(movieTitle) {
    const { data } = await axios.get(
      "https://www.omdbapi.com/?apikey=88b32aac&s=friends",
    );
    setMovies(data.Search || []);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
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

export default Home;

// onChange="filterMovies(event)"
