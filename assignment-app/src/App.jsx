import React from "react";
import Search from "./components/Search";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link to="/" className="navbar-brand ms-4 nav-link">
          User Behavior Data
        </Link>
        <Link to="/search" className="navbar-brand ms-4 nav-link">
          Search Through Dataset
        </Link>
      </nav>
      <hr/>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* <p> tag is a placeholder, You'll need to change the tag/component type later}
        <p className="navbar-brand ms-4 nav-link">User Behavior Data</p>
      </nav>*/
