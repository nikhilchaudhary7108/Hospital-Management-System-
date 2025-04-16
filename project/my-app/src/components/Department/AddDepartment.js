import React, { useState } from "react";
import axios from "axios";
import "./department.css";

const AddDepartment = () => {
  const [dept_ID, setDeptID] = useState("");
  const [dept_name, setDeptName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDepartment = {
      dept_ID,
      dept_name,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/departments/", newDepartment);
      setMessage(response.data.message || "Department registered successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while adding the department.");
      setMessage("");
    }
  };

  return (
    <div className="add-department">
      <h1>Add Department</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dept_ID}
          onChange={(e) => setDeptID(e.target.value)}
          placeholder="Department ID"
          required
        />
        <input
          type="text"
          value={dept_name}
          onChange={(e) => setDeptName(e.target.value)}
          placeholder="Department Name"
          required
        />
        <button type="submit">Add Department</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddDepartment;
