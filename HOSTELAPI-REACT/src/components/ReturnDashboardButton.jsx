import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnDashboardButton = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/");
  };

  return (
    <button 
      className="btn btn-primary m-3 d-flex align-items-center gap-2" 
      onClick={goToDashboard}
    >
      <i className="bi bi-speedometer2"></i> {/* Dashboard icon */}
      Return to Dashboard
    </button>
  );
};

export default ReturnDashboardButton;
