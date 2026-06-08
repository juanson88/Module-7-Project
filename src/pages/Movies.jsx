import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Movies.css";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState(title);

  function onSearch() {
    fetchMovies(searchTitle);
  }

  async function fetchMovies(movieTitle) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle || title}`,
    );
    setMovies(data.Search || []);
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (<MovieCard />);
};

export default Movies;
