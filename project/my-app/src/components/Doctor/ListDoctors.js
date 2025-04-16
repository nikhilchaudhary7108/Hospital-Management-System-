import React, { useState, useEffect } from "react";
import axios from "axios";
import "./doctor.css";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/doctors");
        setDoctors(response.data);
      } catch (err) {
        setError("An error occurred while fetching doctors.");
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="doctor-list">
      <h1>Doctor List</h1>
      {error && <p className="error">{error}</p>}
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Specialisation</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.doctorID}>
                <td>{doctor.doctorID}</td>
                <td>{doctor.doctorName}</td>
                <td>{doctor.specialisation}</td>
                <td>{doctor.dept_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorList;
