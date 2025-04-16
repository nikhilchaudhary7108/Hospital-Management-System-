import React, { useState } from "react";
import axios from "axios";
import "./patient.css";

const GetPatient = () => {
  const [patientID, setPatientID] = useState("");
  const [patientDetails, setPatientDetails] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setPatientDetails(null);

    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/patients/${patientID}`);
      setPatientDetails(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while fetching patient details.");
    }
  };

  return (
    <div className="form-container">
      <h1>Get Patient Details</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          placeholder="Enter Patient ID"
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {patientDetails && (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <p><strong>Patient Name:</strong> {patientDetails.patient_name}</p>
          <p><strong>DOB:</strong> {patientDetails.DOB}</p>
          <p><strong>Gender:</strong> {patientDetails.gender}</p>
          <p><strong>Address:</strong> {patientDetails.address}</p>
          <p><strong>Contact No:</strong> {patientDetails.contactNo}</p>
          <p><strong>Email:</strong> {patientDetails.email}</p>
          <p><strong>Insurance Details:</strong> {patientDetails.insurance_details}</p>
        </div>
      )}
    </div>
  );
};

export default GetPatient;
