import React, { useState } from "react";
import axios from "axios";
import config from "./config";
import ReturnDashboardButton from "../components/ReturnDashboardButton";

const AddHostel = () => {
  const [hostel, setHostel] = useState({
    id: "",
    hostelName: "",
    location: "",
    capacity: "",
    wardenName: ""
  });

  const handleChange = (e) => {
    setHostel({
      ...hostel,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.url}/add`, hostel);
      alert("✅ Hostel Added Successfully!");
      setHostel({
        id: "",
        hostelName: "",
        location: "",
        capacity: "",
        wardenName: ""
      });
    } catch (error) {
      console.error("Error adding hostel:", error);
      alert("❌ Error adding hostel");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">➕ Add Hostel</h2>
      <form onSubmit={handleSubmit}>
        {/* Hostel ID */}
        <div className="mb-3">
          <label className="form-label">Hostel ID</label>
          <input
            type="number"
            className="form-control"
            name="id"
            value={hostel.id}
            onChange={handleChange}
            required
          />
        </div>

        {/* Hostel Name */}
        <div className="mb-3">
          <label className="form-label">Hostel Name</label>
          <input
            type="text"
            className="form-control"
            name="hostelName"
            value={hostel.hostelName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={hostel.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Capacity */}
        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            type="number"
            className="form-control"
            name="capacity"
            value={hostel.capacity}
            onChange={handleChange}
          />
        </div>

        {/* Warden Name */}
        <div className="mb-3">
          <label className="form-label">Warden Name</label>
          <input
            type="text"
            className="form-control"
            name="wardenName"
            value={hostel.wardenName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add Hostel
        </button>
      </form>
      <ReturnDashboardButton />
    </div>
  );
};

export default AddHostel;
