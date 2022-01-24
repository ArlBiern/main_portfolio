import { Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import "../styles/general.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/main_portfolio" element={<Home />} />
        <Route path="/main_portfolio/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
