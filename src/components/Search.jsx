import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import "./Search.css";

const Search = ({ onSearchResults, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const fetchMovies = async (movieTitle) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle}`,
      );

      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    fetchMovies(searchTerm);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedMovies = useMemo(() => {
    const sorted = [...movies];

    switch (sortOption) {
      case "az":
        return sorted.sort((a, b) => a.Title.localeCompare(b.Title));

      case "za":
        return sorted.sort((a, b) => b.Title.localeCompare(a.Title));

      case "newest":
        return sorted.sort(
          (a, b) => Number(b.Year.slice(0, 4)) - Number(a.Year.slice(0, 4)),
        );

      case "oldest":
        return sorted.sort(
          (a, b) => Number(a.Year.slice(0, 4)) - Number(b.Year.slice(0, 4)),
        );

      default:
        return sorted;
    }
  }, [movies, sortOption]);

  useEffect(() => {
    onSearchResults(sortedMovies);
  }, [sortedMovies, onSearchResults]);

  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="search__btn" type="submit">
            Search
          </button>
        </form>

        {movies.length > 0 && (
          <select
            className="search__sort"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default" disabled>Sort By</option>

            <option value="az">Alphabetical A-Z</option>

            <option value="za">Alphabetical Z-A</option>

            <option value="newest">Newest to Oldest</option>

            <option value="oldest">Oldest to Newest</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Search;