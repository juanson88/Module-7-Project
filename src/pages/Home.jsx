import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SkeletonLoader from "../components/SkeletonLoader";
import "./Home.css";

const Home = ({ searchResults, loading }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        if (!searchResults) {
          const { data } = await axios.get(
            "https://www.omdbapi.com/?apikey=88b32aac&s=friends",
          );

          setMovies(data.Search || []);
        }
      } catch (error) {
        console.error("Error fetching default movies:", error);
      }
    };

    fetchDefaultMovies();
  }, [searchResults]);

  useEffect(() => {
    if (searchResults !== undefined) {
      setMovies(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="movie-list">
      {loading ? (
        <div className="skeleton-list">
            {/* Render multiple skeleton loaders based on expected number of movie cards */}
            {Array.from({ length: 10 }).map((_, index) => (
              <SkeletonLoader  key={index} type="searchResults" />
            ))}
        </div>
      ) : movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        null
      )}
    </div>
  );
};

export default Home;
