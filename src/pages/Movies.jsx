import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);

  async function fetchMovies(movieTitle) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle}`
    );
    setMovies(data.Search || []);
  }

  useEffect(() => {
    fetchMovies(title); // Fetch movies based on the title from the route
  }, [title]); // Re-run effect whenever the title changes

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
