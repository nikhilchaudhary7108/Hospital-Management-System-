import React, { useState } from "react";
import axios from "axios";
import "./consultation.css";

const AddConsultation = () => {
  const [formData, setFormData] = useState({
    app_id: "",
    app_date: "",
    app_time: "",
    labtestID: "",
    test_name: "",
    test_description: "",
    test_cost: "",
    pharmacyID: "",
    medicine_name: "",
    stock_quantity: "",
    price_per_unit: "",
    billID: "",
    total_amount: "",
    recordID: "",
    diagonsis: "",
    treatment: "",
    prescription: "",
    record_date: "",
    patientID: "",
    doctorID: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/consultations/", formData);
      setMessage(response.data.message || "Consultation added successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h1>Schedule a Consultation</h1>
      <form onSubmit={handleSubmit}>
        {/* Appointment ID */}
        <input
          type="text"
          name="app_id"
          placeholder="Appointment ID"
          value={formData.app_id}
          onChange={handleChange}
          required
        />

        {/* Appointment Date */}
        <input
          type="date"
          name="app_date"
          value={formData.app_date}
          onChange={handleChange}
          required
        />

        {/* Appointment Time */}
        <input
          type="time"
          name="app_time"
          value={formData.app_time}
          onChange={handleChange}
          required
        />

        {/* Lab Test ID */}
        <input
          type="text"
          name="labtestID"
          placeholder="Lab Test ID"
          value={formData.labtestID}
          onChange={handleChange}
        />

        {/* Test Name */}
        <input
          type="text"
          name="test_name"
          placeholder="Test Name"
          value={formData.test_name}
          onChange={handleChange}
        />

        {/* Test Description */}
        <textarea
          name="test_description"
          placeholder="Test Description"
          value={formData.test_description}
          onChange={handleChange}
        ></textarea>

        {/* Test Cost */}
        <input
          type="number"
          name="test_cost"
          placeholder="Test Cost"
          value={formData.test_cost}
          onChange={handleChange}
        />

        {/* Pharmacy ID */}
        <input
          type="text"
          name="pharmacyID"
          placeholder="Pharmacy ID"
          value={formData.pharmacyID}
          onChange={handleChange}
        />

        {/* Medicine Name */}
        <input
          type="text"
          name="medicine_name"
          placeholder="Medicine Name"
          value={formData.medicine_name}
          onChange={handleChange}
        />

        {/* Stock Quantity */}
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
        />

        {/* Price Per Unit */}
        <input
          type="number"
          name="price_per_unit"
          placeholder="Price Per Unit"
          value={formData.price_per_unit}
          onChange={handleChange}
        />

        {/* Bill ID */}
        <input
          type="text"
          name="billID"
          placeholder="Bill ID"
          value={formData.billID}
          onChange={handleChange}
        />

        {/* Total Amount */}
        <input
          type="number"
          name="total_amount"
          placeholder="Total Amount"
          value={formData.total_amount}
          onChange={handleChange}
          required
        />

        {/* Record ID */}
        <input
          type="text"
          name="recordID"
          placeholder="Record ID"
          value={formData.recordID}
          onChange={handleChange}
          required
        />

        {/* Diagnosis */}
        <textarea
          name="diagonsis"
          placeholder="Diagnosis"
          value={formData.diagonsis}
          onChange={handleChange}
        ></textarea>

        {/* Treatment */}
        <textarea
          name="treatment"
          placeholder="Treatment"
          value={formData.treatment}
          onChange={handleChange}
        ></textarea>

        {/* Prescription */}
        <textarea
          name="prescription"
          placeholder="Prescription"
          value={formData.prescription}
          onChange={handleChange}
        ></textarea>

        {/* Record Date */}
        <input
          type="date"
          name="record_date"
          value={formData.record_date}
          onChange={handleChange}
          required
        />

        {/* Patient ID */}
        <input
          type="text"
          name="patientID"
          placeholder="Patient ID"
          value={formData.patientID}
          onChange={handleChange}
          required
        />

        {/* Doctor ID */}
        <input
          type="text"
          name="doctorID"
          placeholder="Doctor ID"
          value={formData.doctorID}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">Add Consultation</button>
      </form>

      {/* Message Display */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddConsultation;
