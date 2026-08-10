import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieInfo.css";
import SkeletonLoader from "../components/SkeletonLoader";

const MovieInfo = ({ prevSearchResults, setSearchResults }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=88b32aac`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleBackButtonClick = () => {
    setSearchResults(prevSearchResults);
    navigate(-1);
  };

  if (loading)  {
    return <SkeletonLoader type="movieInfo" />
  }  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="movie-info-container">
      <button onClick={handleBackButtonClick}>Back</button>
      <h1>{movieData.Title}</h1>
      <div className="info">
        <div className="title__poster">
          <img
            className="movie__img"
            src={movieData.Poster}
            alt={`${movieData.Title} poster`}
          />
        </div>
        <div className="more__info">
          <p>
            <b>Date Released:</b> {movieData.Released}
          </p>
          <p>
            <b>Rating:</b> {movieData.Rated}
          </p>
          <p>
            <b>Run Time:</b> {movieData.Runtime}
          </p>
          <p>
            <b>Genre:</b> {movieData.Genre}
          </p>
          <p>
            <b>Director:</b> {movieData.Director}
          </p>
          <p>
            <b>Actors:</b> {movieData.Actors}
          </p>
          <p>
            <b>IMDb Rating:</b> {movieData.imdbRating}
          </p>
          <p>
            <b>Box Office:</b> {movieData.BoxOffice}
          </p>
          <p>
            <b>Plot:</b> {movieData.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
