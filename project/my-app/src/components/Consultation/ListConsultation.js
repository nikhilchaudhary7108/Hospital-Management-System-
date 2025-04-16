import React, { useState, useEffect } from "react";
import axios from "axios";
import "./consultation.css";

const ListConsultation = () => {
  const [consultations, setConsultations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/consultations/");
        setConsultations(response.data);
      } catch (err) {
        setError("Error fetching consultations.");
      }
    };
    fetchConsultations();
  }, []);

  return (
    <div className="list-consultation">
      <h1>Consultation List</h1>
      {error && <p className="error">{error}</p>}
      {consultations.length === 0 ? (
        <p>No consultations found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Patient ID</th>
              <th>Doctor ID</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consult) => (
              <tr key={consult.app_id}>
                <td>{consult.app_id}</td>
                <td>{consult.app_date}</td>
                <td>{consult.app_time}</td>
                <td>{consult.patientID}</td>
                <td>{consult.doctorID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListConsultation;
