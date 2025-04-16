import React, { useState } from "react";
import axios from "axios";
import "./doctor.css";

const AddDoctor = () => {
  const [doctorID, setDoctorID] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [dept_name, setDeptName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = {
      doctorID,
      doctorName,
      specialisation,
      dept_name,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/doctors/", newDoctor);
      setMessage(response.data.message || "Doctor registered successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while adding the doctor.");
      setMessage("");
    }
  };

  return (
    <div className="add-doctor">
      <h1>Add New Doctor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={doctorID}
          onChange={(e) => setDoctorID(e.target.value)}
          placeholder="Doctor ID"
          required
        />
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Doctor Name"
          required
        />
        <input
          type="text"
          value={specialisation}
          onChange={(e) => setSpecialisation(e.target.value)}
          placeholder="Specialisation"
          required
        />
        <input
          type="text"
          value={dept_name}
          onChange={(e) => setDeptName(e.target.value)}
          placeholder="Department Name"
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddDoctor;
