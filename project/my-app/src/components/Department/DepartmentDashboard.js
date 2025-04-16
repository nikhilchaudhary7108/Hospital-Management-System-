import React from "react";
import { useNavigate } from "react-router-dom";
import "./department.css";

const DepartmentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="department-dashboard">
      <h1 className="department-dashboard-title">Department Management</h1>
      <div className="department-options">
        <div className="option-card" onClick={() => navigate("/department/list")}>
          <h2>Department List</h2>
          <p>View all departments and their details.</p>
        </div>
        <div className="option-card" onClick={() => navigate("/department/add")}>
          <h2>Add Department</h2>
          <p>Add a new department to the system.</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDashboard;
