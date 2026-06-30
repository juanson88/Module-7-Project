import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [searchResults, setSearchResults] = useState(undefined);

 const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Search onSearchResults={handleSearchResults} />
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />}></Route>
          <Route path=":title" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;