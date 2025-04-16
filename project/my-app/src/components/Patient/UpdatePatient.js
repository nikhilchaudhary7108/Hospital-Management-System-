import React, { useState } from "react";
import axios from "axios";
import "./patient.css";

const UpdatePatient = () => {
  const [patientID, setPatientID] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    patient_name: "",
    DOB: "",
    gender: "",
    address: "",
    contactNo: "",
    email: "",
    insurance_details: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/patients/${patientID}`);
      setPatientDetails(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Patient not found.");
      setPatientDetails({
        patient_name: "",
        DOB: "",
        gender: "",
        address: "",
        contactNo: "",
        email: "",
        insurance_details: "",
      });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/patients/${patientID}`, patientDetails);
      setMessage(response.data.message || "Patient details updated successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while updating patient details.");
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setPatientDetails({ ...patientDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h1>Update Patient Details</h1>
      <div>
        <input
          type="text"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
          placeholder="Enter Patient ID"
          required
        />
        <button type="button" onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {patientDetails.patient_name && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="patient_name"
            value={patientDetails.patient_name}
            onChange={handleChange}
            placeholder="Patient Name"
            required
          />
          <input
            type="date"
            name="DOB"
            value={patientDetails.DOB}
            onChange={handleChange}
            required
          />
          <select name="gender" value={patientDetails.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="address"
            value={patientDetails.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            type="text"
            name="contactNo"
            value={patientDetails.contactNo}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <input
            type="email"
            name="email"
            value={patientDetails.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="insurance_details"
            value={patientDetails.insurance_details}
            onChange={handleChange}
            placeholder="Insurance Details"
          />
          <button type="submit">Update</button>
        </form>
      )}

      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default UpdatePatient;
