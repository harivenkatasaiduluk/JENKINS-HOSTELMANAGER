import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "./config";
import ReturnDashboardButton from "../components/ReturnDashboardButton";

const ViewHostels = () => {
  const [hostels, setHostels] = useState([]);
  const [editing, setEditing] = useState(false);
  const [hostel, setHostel] = useState({});
  const API_URL = `${config.url}`;

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      setHostels(response.data);
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  const deleteHostel = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
    fetchHostels();
  };

  const editHostel = (h) => {
    setEditing(true);
    setHostel(h);
  };

  const updateHostel = async () => {
    await axios.put(`${API_URL}/update`, hostel);
    setEditing(false);
    fetchHostels();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📋 All Hostels</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Hostel Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Warden</th>
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
                <button className="btn btn-warning btn-sm me-2" onClick={() => editHostel(h)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteHostel(h.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing && (
        <div className="card p-3 mt-3 shadow-sm">
          <h4>Edit Hostel</h4>
          <input className="form-control mb-2" value={hostel.hostelName} onChange={(e) => setHostel({ ...hostel, hostelName: e.target.value })} />
          <input className="form-control mb-2" value={hostel.location} onChange={(e) => setHostel({ ...hostel, location: e.target.value })} />
          <input className="form-control mb-2" type="number" value={hostel.capacity} onChange={(e) => setHostel({ ...hostel, capacity: e.target.value })} />
          <input className="form-control mb-2" value={hostel.wardenName} onChange={(e) => setHostel({ ...hostel, wardenName: e.target.value })} />
          <button className="btn btn-success" onClick={updateHostel}>Update</button>
        </div>
      )}
      <ReturnDashboardButton />
    </div>
  );
};

export default ViewHostels;
