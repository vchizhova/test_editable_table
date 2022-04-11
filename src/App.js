import React from "react";

import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import { AddItem } from "./components/AddItem";
import DraggbleGrid from "./domains/DraggbleGrid";
import Grid from "./domains/Grid";

function App() {
  return (
    <div className="main">
      <div className="container">
        <header>
          <nav>
            <Link to="/">Draggble grid</Link>
            <Link to="/common">Common grid</Link>
          </nav>
          <AddItem />
        </header>
        <Routes>
          <Route path="/" element={<DraggbleGrid />} />
          <Route path="/common" element={<Grid />} />
        </Routes>{" "}
      </div>
    </div>
  );
}

export default App;
