import React, { useState, useEffect } from "react";
import axios from "axios";
import "./department.css";

const ListDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/departments");
        setDepartments(response.data);
      } catch (err) {
        setError("An error occurred while fetching departments.");
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div className="list-department">
      <h1>Department List</h1>
      {error && <p className="error">{error}</p>}
      {departments.length === 0 ? (
        <p>No departments found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.dept_ID}>
                <td>{dept.dept_ID}</td>
                <td>{dept.dept_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListDepartment;
