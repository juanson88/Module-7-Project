import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./Search.css";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (movieTitle) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=88b32aac&s=${movieTitle}`,
      );
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  return (
    <div className="container">
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie"
          />
          <button className="search__btn" type="submit">
            Search
          </button>
        </form>
        <div className="movie-list">
          {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

//         {/* <select name="" id="filter" onChange="filterMovies(event)">
//           <option value="" disabled selected>
//             Sort
//           </option>
//           <option value="OLD_TO_NEW">Year, Old to New</option>
//           <option value="NEW_TO_OLD">Year, New to Old</option>
//           <option value="A_TO_Z">Alphabetically, A - Z</option>
//           <option value="Z_TO_A">Alphabetically, Z - A</option>
//         </select> */}
//       </div> */}
//     </div>
//   );
// };

// export default Search;
