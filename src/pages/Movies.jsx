import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SkeletonLoader from "../components/SkeletonLoader";

const Movies = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovies(movieTitle) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle}`);
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(title);
  }, [title]);

  return (
    <div className="movies-container">
      {isLoading ? (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      )}
    </div>
  );
};

export default Movies;
