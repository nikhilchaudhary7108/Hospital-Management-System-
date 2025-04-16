import React from "react";
import { useNavigate } from "react-router-dom";
import "./bedding.css";

const BeddingDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bedding-dashboard">
      <h1>Bedding Management</h1>
      <div className="bedding-options">
        <div className="bedding-option" onClick={() => navigate("/bedding/list")}>
          <h2>View Bedding</h2>
          <p>Check all bedding details, status, and history.</p>
        </div>
        <div className="bedding-option" onClick={() => navigate("/bedding/add")}>
          <h2>Assign / Add Bed</h2>
          <p>Assign a bed to a patient or add a new bed.</p>
        </div>
      </div>
    </div>
  );
};

export default BeddingDashboard;
