import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/page1" className="nav-button">Page 1</Link>
          <Link to="/page2" className="nav-button">Page 2</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
