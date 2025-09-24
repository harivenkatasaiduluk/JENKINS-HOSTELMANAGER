import React, { useState } from "react";
import axios from "axios";
import config from "./config";
import ReturnDashboardButton from "../components/ReturnDashboardButton";

const FindHostel = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const API_URL = `${config.url}`;

  const handleSearch = async () => {
    setResult(null);
    setError("");
    
    try {
      let response;
      if (!isNaN(search)) {
        // Search by ID (numeric)
        response = await axios.get(`${API_URL}/${search}`);
      } else {
        // Search by name
        response = await axios.get(`${API_URL}/search?name=${search}`);
        // If multiple results, take the first one for display
        response = response.data.length > 0 ? response.data[0] : null;
      }

      if (response) {
        setResult(response.data || response); // handle different response formats
      } else {
        setError("❌ Hostel not found!");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Hostel not found!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>🔍 Find Hostel</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter Hostel ID or Name"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {result && (
        <div className="card p-3 shadow-sm">
          <h4>Hostel Found</h4>
          <p><b>ID:</b> {result.id}</p>
          <p><b>Name:</b> {result.hostelName}</p>
          <p><b>Location:</b> {result.location}</p>
          <p><b>Capacity:</b> {result.capacity}</p>
          <p><b>Warden:</b> {result.wardenName}</p>
        </div>
      )}
      <ReturnDashboardButton />
    </div>
  );
};

export default FindHostel;
