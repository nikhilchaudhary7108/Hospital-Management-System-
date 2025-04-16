import React from "react";
import { useNavigate } from "react-router-dom";
import "./consultation.css";

const ConsultationDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="consultation-dashboard">
      <h1 className="consultation-dashboard-title">Consultation Management</h1>
      <div className="consultation-options">
        <div className="option-card" onClick={() => navigate("/consultation/list")}>
          <h2>Consultation List</h2>
          <p>View all consultations and details.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/consultation/add")}>
          <h2>Schedule Consultation</h2>
          <p>Schedule a new consultation for a patient.</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationDashboard;
