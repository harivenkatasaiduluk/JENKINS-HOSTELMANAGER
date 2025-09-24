import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddHostel from "./components/AddHostel";
import ViewHostels from "./components/ViewHostels";
import FindHostel from "./components/FindHostel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddHostel />} />
        <Route path="/view" element={<ViewHostels />} />
        <Route path="/find" element={<FindHostel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
