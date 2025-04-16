import React, { useState } from "react";
import axios from "axios";
import "./patient.css";

const RegisterPatient = () => {
  const [patientData, setPatientData] = useState({
    patientID: "",
    patient_name: "",
    DOB: "",
    gender: "Male",
    address: "",
    contactNo: "",
    email: "",
    insurance_details: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/patients/", patientData);
      setMessage(response.data.message || "Patient registered successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h1>Register a New Patient</h1>
      <form onSubmit={handleSubmit}>
        {/* Patient ID */}
        <input
          type="text"
          name="patientID"
          placeholder="Patient ID"
          value={patientData.patientID}
          onChange={handleChange}
          required
        />

        {/* Patient Name */}
        <input
          type="text"
          name="patient_name"
          placeholder="Patient Name"
          value={patientData.patient_name}
          onChange={handleChange}
          required
        />

        {/* Date of Birth */}
        <input
          type="date"
          name="DOB"
          value={patientData.DOB}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <select name="gender" value={patientData.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={patientData.address}
          onChange={handleChange}
        />

        {/* Contact Number */}
        <input
          type="text"
          name="contactNo"
          placeholder="Contact Number"
          value={patientData.contactNo}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={patientData.email}
          onChange={handleChange}
        />

        {/* Insurance Details */}
        <textarea
          name="insurance_details"
          placeholder="Insurance Details"
          value={patientData.insurance_details}
          onChange={handleChange}
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>

      {/* Message Display */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPatient;
