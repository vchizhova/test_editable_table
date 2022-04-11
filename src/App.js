import React from "react";

import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import { AddItem } from "./components/AddItem";
import WithGridCss from "./domains/DraggbleGrid";
import WithoutGridCss from "./domains/Grid";

function App() {
  return (
    <>
      <nav
      >
        <Link to="/">Draggble grid</Link>
        <Link to="/common">Common grid</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WithGridCss />} />
        <Route path="/common" element={<WithoutGridCss />} />
      </Routes>

      <AddItem />
    </>
  );
}

export default App;
