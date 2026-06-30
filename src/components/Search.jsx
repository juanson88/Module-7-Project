import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import MovieCard from "./MovieCard";

const Search = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const fetchMovies = async (movieTitle) => {
    console.log("Fetching movies for:", movieTitle);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle}`,
      );
      const results = data.Search || [];
      setMovies(results);
      onSearchResults(results); // Ensure this doesn't cause duplicates
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedMovies = () => {
    let sorted = [...movies];
    if (sortOption === "az") {
      sorted.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortOption === "za") {
      sorted.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (sortOption === "newest") {
      sorted.sort((a, b) => b.Year - a.Year);
    } else if (sortOption === "oldest") {
      sorted.sort((a, b) => a.Year - b.Year);
    }
    return sorted;
  };

  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button className="search__btn" type="submit">Search</button>
        </form>

      {movies.length > 0 && (
        <select
          className="search__sort"
          value={sortOption}
          onChange={handleSortChange}
          >
          <option value="default" disabled>
            Sort By
          </option>
          <option value="az">Alphabetical A-Z</option>
          <option value="za">Alphabetical Z-A</option>
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
        </select>
      )}

          </div>
      <div className="movie-list">
        {sortedMovies().map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
