import "./dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Hospital Management System</h1>
      <div className="options-container">
        <div className="option-card" onClick={() => navigate("/patient")}>
          <h2>Patient</h2>
          <p>Manage patient records and information.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/doctor")}>
          <h2>Doctor</h2>
          <p>Manage doctor details and add new doctors.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/department")}>
          <h2>Departments</h2>
          <p>Manage departments and add new ones.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/consultation")}>
          <h2>Consultation</h2>
          <p>Handle consultations and appointments.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/bedding")}>
          <h2>Bedding</h2>
          <p>Manage bedding and room assignments.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
