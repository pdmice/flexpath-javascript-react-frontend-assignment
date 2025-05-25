import React from "react";
import Search from "./components/Search";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Error from "./components/Error"
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link to="/" className="navbar-brand ms-4 nav-link fs-4">
          User Behavior Data
        </Link>
        <Link to="/search" className="navbar-brand ms-4 nav-link">
          Search Through Dataset
        </Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
