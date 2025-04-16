import React from "react";
import { useNavigate } from "react-router-dom";
import "./doctor.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="doctor-dashboard">
      <h1 className="doctor-dashboard-title">Doctor Management</h1>
      <div className="doctor-options">
        <div className="option-card" onClick={() => navigate("/doctor/list")}>
          <h2>Doctor List</h2>
          <p>View all doctors and their details.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/doctor/add")}>
          <h2>Add New Doctor</h2>
          <p>Add a new doctor to the system.</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
