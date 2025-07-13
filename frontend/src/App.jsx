import { useState } from "react";
import Home from "./components/Home";
//Some code missing here!!!
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Update from "./components/Update";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
<Route path="/Update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
