import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import config from "./config.js";

const BASE_URL = config.BASE_URL || "http://localhost:2035/api/hostels";

const HostelManager = () => {
  const [hostels, setHostels] = useState([]);
  const [form, setForm] = useState({
    id: "",
    hostelName: "",
    location: "",
    capacity: "",
    wardenName: ""
  });

  // Fetch all hostels on component mount
  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get(BASE_URL + "/");
      setHostels(response.data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit for Add/Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        // Update existing hostel
        await axios.put(`${BASE_URL}/${form.id}`, {
          hostelName: form.hostelName,
          location: form.location,
          capacity: parseInt(form.capacity),
          wardenName: form.wardenName
        });
      } else {
        // Add new hostel
        await axios.post(BASE_URL + "/", {
          hostelName: form.hostelName,
          location: form.location,
          capacity: parseInt(form.capacity),
          wardenName: form.wardenName
        });
      }
      setForm({ id: "", hostelName: "", location: "", capacity: "", wardenName: "" });
      fetchHostels();
    } catch (error) {
      console.error("Error saving hostel:", error);
    }
  };

  // Handle edit button
  const handleEdit = (hostel) => {
    setForm({
      id: hostel.id,
      hostelName: hostel.hostelName,
      location: hostel.location,
      capacity: hostel.capacity,
      wardenName: hostel.wardenName
    });
  };

  // Handle delete button
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchHostels();
    } catch (error) {
      console.error("Error deleting hostel:", error);
    }
  };

  return (
    <div className="hostel-manager">
      <h2>Hostel Manager</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="hostelName"
          placeholder="Hostel Name"
          value={form.hostelName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="wardenName"
          placeholder="Warden Name"
          value={form.wardenName}
          onChange={handleChange}
          required
        />
        <button type="submit">{form.id ? "Update Hostel" : "Add Hostel"}</button>
        {form.id && (
          <button
            type="button"
            onClick={() =>
              setForm({ id: "", hostelName: "", location: "", capacity: "", wardenName: "" })
            }
          >
            Cancel
          </button>
        )}
      </form>

      <h3>All Hostels</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Warden</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hostels.map((hostel) => (
            <tr key={hostel.id}>
              <td>{hostel.id}</td>
              <td>{hostel.hostelName}</td>
              <td>{hostel.location}</td>
              <td>{hostel.capacity}</td>
              <td>{hostel.wardenName}</td>
              <td>
                <button onClick={() => handleEdit(hostel)}>Edit</button>
                <button onClick={() => handleDelete(hostel.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HostelManager;
