import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Search />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":title" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
