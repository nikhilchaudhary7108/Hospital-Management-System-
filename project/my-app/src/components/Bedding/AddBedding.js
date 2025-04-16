import React, { useState } from "react";
import axios from "axios";
import "./bedding.css";

const AddBedding = () => {
  const [formData, setFormData] = useState({
    bed_id: "",
    bed_type: "",
    bed_status: "",
    patientID: "",
    admission_date: "",
    discharge_date: "",
    cleaning_status: "",
    last_cleaned: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/bedding/", formData);
      setMessage(response.data.message || "Bed added successfully!");
    } catch (error) {
      setMessage("Error adding bed. Please check the data!");
    }
  };

  return (
    <div className="add-bedding">
      <h1>Assign / Add Bed</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bed ID</label>
          <input type="text" name="bed_id" value={formData.bed_id} onChange={handleChange} required />
        </div>
        <div>
          <label>Bed Type</label>
          <input type="text" name="bed_type" value={formData.bed_type} onChange={handleChange} required />
        </div>
        <div>
          <label>Bed Status</label>
          <input type="text" name="bed_status" value={formData.bed_status} onChange={handleChange} required />
        </div>
        <div>
          <label>Patient ID</label>
          <input type="text" name="patientID" value={formData.patientID} onChange={handleChange} />
        </div>
        <div>
          <label>Admission Date</label>
          <input type="date" name="admission_date" value={formData.admission_date} onChange={handleChange} />
        </div>
        <div>
          <label>Discharge Date</label>
          <input type="date" name="discharge_date" value={formData.discharge_date} onChange={handleChange} />
        </div>
        <div>
          <label>Cleaning Status</label>
          <input type="text" name="cleaning_status" value={formData.cleaning_status} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Cleaned</label>
          <input type="date" name="last_cleaned" value={formData.last_cleaned} onChange={handleChange} />
        </div>
        <button type="submit">Add Bed</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddBedding;
