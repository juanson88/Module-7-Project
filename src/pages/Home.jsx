import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]); // Movies to display
  const [defaultMovies, setDefaultMovies] = useState([]); // Default movies

  // Fetch default movies when the component mounts
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const { data } = await axios.get(
        "https://www.omdbapi.com/?apikey=88b32aac&s=friends"
      );
      setDefaultMovies(data.Search || []);
      setMovies(data.Search || []);
    };

    fetchDefaultMovies();
  }, []);

  // Function to handle search results
  const handleSearchResults = (searchResults) => {
    if (searchResults.length > 0) {
      setMovies(searchResults);
    } else {
      setMovies(defaultMovies); // Reset to default if no search results
    }
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Home;

