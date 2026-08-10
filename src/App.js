import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MovieInfo from "./pages/MovieInfo";

function App() {
  const [searchResults, setSearchResults] = useState(undefined);
  const [prevSearchResults, setPrevSearchResults] = useState(undefined);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearchResults = (results) => {
    setPrevSearchResults(searchResults);
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Search onSearchResults={handleSearchResults} setLoading={setLoading} />

        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} loading={loading} />} />
          <Route path=":title" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo prevSearchResults={prevSearchResults} setSearchResults={setSearchResults} loading={loading} setLoading={setLoading} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
