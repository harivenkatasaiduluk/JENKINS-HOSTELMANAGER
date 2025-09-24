import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddHostel from "./components/AddHostel";
import ViewHostels from "./components/ViewHostels";
import FindHostel from "./components/FindHostel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddHostel />} />
        <Route path="/view" element={<ViewHostels />} />
        <Route path="/find" element={<FindHostel />} />
      </Routes>
    </Router>
  );
};

export default App;
