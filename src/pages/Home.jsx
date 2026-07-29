import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      setLoading(true);
      try {
        if (!searchResults) {
          const { data } = await axios.get(
            "https://www.omdbapi.com/?apikey=88b32aac&s=friends"
          );
          setMovies(data.Search || []);
        }
      } catch (error) {
        console.error("Error fetching default movies:", error);
      } finally {
        setLoading(false);
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
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      ) : movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <h2>No movies found.</h2>
      )}
    </div>
  );
};

export default Home;
