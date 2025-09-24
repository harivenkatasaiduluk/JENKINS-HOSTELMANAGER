import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🏠 Hostel Management Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Add Hostel</h5>
              <p className="card-text">Add a new hostel to the system.</p>
              <button className="btn btn-primary" onClick={() => navigate("/add")}>
                ➕ Add Hostel
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">View All Hostels</h5>
              <p className="card-text">See the list of all hostels.</p>
              <button className="btn btn-success" onClick={() => navigate("/view")}>
                📋 View Hostels
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Find Hostel</h5>
              <p className="card-text">Search hostel by ID or name.</p>
              <button className="btn btn-warning" onClick={() => navigate("/find")}>
                🔍 Find Hostel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
