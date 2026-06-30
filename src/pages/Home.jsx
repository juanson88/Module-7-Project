import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Home = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);

  // Fetch default movies
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://www.omdbapi.com/?apikey=88b32aac&s=friends"
        );
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Error fetching default movies:", error);
      }
    };

    fetchDefaultMovies();
  }, []);

  // Update movies if there are search results
  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setMovies(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
