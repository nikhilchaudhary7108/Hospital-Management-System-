import React from "react";
import { useNavigate } from "react-router-dom";
import "./patient.css";

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="patient-dashboard">
      <h1>Patient Section</h1>
      <div className="patient-options">
        <button onClick={() => navigate("/patient/register")}>
          Register New Patient
        </button>
        <button onClick={() => navigate("/patient/get")}>
          Get Patient Details
        </button>
        <button onClick={() => navigate("/patient/update")}>
          Update Patient Data
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard;
