import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bedding.css";

const ListBedding = () => {
  const [bedding, setBedding] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBedding = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/bedding");
        setBedding(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bedding data:", error);
        setLoading(false);
      }
    };

    fetchBedding();
  }, []);

  return (
    <div className="list-bedding">
      <h1>Bedding List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Bed ID</th>
              <th>Bed Type</th>
              <th>Status</th>
              <th>Patient ID</th>
              <th>Admission Date</th>
              <th>Discharge Date</th>
              <th>Cleaning Status</th>
              <th>Last Cleaned</th>
            </tr>
          </thead>
          <tbody>
            {bedding.map((bed) => (
              <tr key={bed.bed_id}>
                <td>{bed.bed_id}</td>
                <td>{bed.bed_type}</td>
                <td>{bed.bed_status}</td>
                <td>{bed.patientID || "N/A"}</td>
                <td>{bed.admission_date || "N/A"}</td>
                <td>{bed.discharge_date || "N/A"}</td>
                <td>{bed.cleaning_status}</td>
                <td>{bed.last_cleaned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListBedding;
