import React from "react";
import Home from "./Home";
import Main from "./Main";
import About from "./About";
import Faq from "./Faq";
import Blog from "./Blog.jsx";
import Vlog from "./Vlog.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/main/vlog" element={<Vlog />} />
        <Route path="/main/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
