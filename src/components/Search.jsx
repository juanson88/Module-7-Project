import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  let navigate = useNavigate();
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
  return (
    <div className="container">
      <div className="search">
        <h1>Movie Database</h1>
        <h2>Search for your Favorite Movies</h2>
        <input
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onSearch();
            }
          }}
        />
        <button
          className="search__btn"
          onClick={() => navigate("/Movies")}
          onClick={() => onSearch()}
        >
          Search
        </button>
        <br />
        <select name="" id="filter" onChange="filterMovies(event)">
          <option value="" disabled selected>
            Sort
          </option>
          <option value="OLD_TO_NEW">Year, Old to New</option>
          <option value="NEW_TO_OLD">Year, New to Old</option>
          <option value="A_TO_Z">Alphabetically, A - Z</option>
          <option value="Z_TO_A">Alphabetically, Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
