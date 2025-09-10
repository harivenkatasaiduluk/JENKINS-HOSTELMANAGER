import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config.js"; // Import API base URL
import "./style.css";

const HostelManager = () => {
  const [hostels, setHostels] = useState([]);
  const [hostel, setHostel] = useState({
    id: "",
    hostelName: "",
    location: "",
    capacity: "",
    wardenName: "",
  });
  const [editing, setEditing] = useState(false);

  const API_URL = config.url;

  // Fetch all hostels
  const fetchHostels = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      setHostels(response.data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHostel({ ...hostel, [name]: value });
  };

  // Add new hostel
  const addHostel = async () => {
    try {
      await axios.post(`${API_URL}/add`, hostel);
      fetchHostels();
      resetForm();
    } catch (error) {
      console.error("Error adding hostel:", error);
    }
  };

  // Update hostel
  const updateHostel = async () => {
    try {
      await axios.put(`${API_URL}/update`, hostel);
      fetchHostels();
      resetForm();
      setEditing(false);
    } catch (error) {
      console.error("Error updating hostel:", error);
    }
  };

  // Delete hostel
  const deleteHostel = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      fetchHostels();
    } catch (error) {
      console.error("Error deleting hostel:", error);
    }
  };

  // Edit hostel
  const editHostel = (h) => {
    setHostel(h);
    setEditing(true);
  };

  // Reset form
  const resetForm = () => {
    setHostel({
      id: "",
      hostelName: "",
      location: "",
      capacity: "",
      wardenName: "",
    });
  };

  return (
    <div className="container">
      <h2>Hostel Management</h2>

      {/* Form */}
      <div className="form">
        <input
          type="text"
          name="hostelName"
          placeholder="Hostel Name"
          value={hostel.hostelName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={hostel.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={hostel.capacity}
          onChange={handleChange}
        />
        <input
          type="text"
          name="wardenName"
          placeholder="Warden Name"
          value={hostel.wardenName}
          onChange={handleChange}
        />

        {editing ? (
          <button onClick={updateHostel}>Update Hostel</button>
        ) : (
          <button onClick={addHostel}>Add Hostel</button>
        )}
        <button onClick={resetForm}>Clear</button>
      </div>

      {/* Hostel List */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hostel Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Warden Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hostels.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.hostelName}</td>
              <td>{h.location}</td>
              <td>{h.capacity}</td>
              <td>{h.wardenName}</td>
              <td>
                <button onClick={() => editHostel(h)}>Edit</button>
                <button onClick={() => deleteHostel(h.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HostelManager;
