import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

// Patient Components
import PatientDashboard from "./components/Patient/PatientDashboard";
import RegisterPatient from "./components/Patient/RegisterPatient";
import GetPatient from "./components/Patient/GetPatient";
import UpdatePatient from "./components/Patient/UpdatePatient";

// Doctor Components
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import AddDoctor from "./components/Doctor/AddDoctor";
import ListDoctors from "./components/Doctor/ListDoctors";

// Department Components
import DepartmentDashboard from "./components/Department/DepartmentDashboard";
import AddDepartment from "./components/Department/AddDepartment";
import ListDepartments from "./components/Department/ListDepartment";

// Bedding Components
import BeddingDashboard from "./components/Bedding/BeddingDashboard";
import ListBedding from "./components/Bedding/ListBedding";
import AddBedding from "./components/Bedding/AddBedding";

// Consultation Components
import ConsultationDashboard from "./components/Consultation/ConsultationDashboard";
import ListConsultations from "./components/Consultation/ListConsultation";
import AddConsultation from "./components/Consultation/AddConsultation";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route path="/" element={<Dashboard />} />

        {/* Patient Routes */}
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/patient/register" element={<RegisterPatient />} />
        <Route path="/patient/get" element={<GetPatient />} />
        <Route path="/patient/update" element={<UpdatePatient />} />

        {/* Doctor Routes */}
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/add" element={<AddDoctor />} />
        <Route path="/doctor/list" element={<ListDoctors />} />

        {/* Department Routes */}
        <Route path="/department" element={<DepartmentDashboard />} />
        <Route path="/department/add" element={<AddDepartment />} />
        <Route path="/department/list" element={<ListDepartments />} />

        {/* Bedding Routes */}
        <Route path="/bedding" element={<BeddingDashboard />} />
        <Route path="/bedding/list" element={<ListBedding />} />
        <Route path="/bedding/add" element={<AddBedding />} />

        {/* Consultation Routes */}
        <Route path="/consultation" element={<ConsultationDashboard />} />
        <Route path="/consultation/list" element={<ListConsultations />} />
        <Route path="/consultation/add" element={<AddConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Dashboard from "./dashboard";
// // import PatientForm from "./patient";
// // import CreatePatient from ".CreatePatient";
// // import UpdatePatient from ".UpdatePatient";
// // import PatientDetails from ".PatientDetails";
// import DoctorForm from "./doctor";
// import ConsultationForm from "./consultation";
// import BeddingForm  from "./bedding";
// import DepartmentForm from "./department";
// // Add imports for other pages like Doctor, Consultation, etc.

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} /> {/* Home page */}
//         <Route path="/patient" element={<PatientForm />} /> {/* Patient page */}
//         {/* <Route path="/patient/options" element={<PatientOptions />} />
//         <Route path="/patient/create" element={<CreatePatient />} />
//         <Route path="/patient/update" element={<UpdatePatient />} />
//         <Route path="/patient/details" element={<PatientDetails />} />         */}
//         <Route path="/doctor" element={<DoctorForm />}/>
//         <Route path="/consultation" element={<ConsultationForm />}/>
//         <Route path="/bedding" element={<BeddingForm />}/>
//         <Route path="/department" element={<DepartmentForm/>}/>
//         {/* Define routes for other options */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import "./dashboard.css";
// import React from "react";
// import PatientForm from "./patient.js";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import PatientForm from "./patient.js";
// // import "./Dashboard.css"; // Import the CSS file for styling

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-title">Hospital Management System</h1>
//       <div className="options-container">
//         <div className="option-card" onClick={() => window.location.href="/patient"}>
//           <h2>Patient</h2>
//           <p>Manage patient records and information.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/doctor"}>
//           <h2>Doctor</h2>
//           <p>View and manage doctor details.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/consultation"}>
//           <h2>Consultation</h2>
//           <p>Handle consultations and appointments.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/bedding"}>
//           <h2>Bedding</h2>
//           <p>Manage bedding and room assignments.</p>
//         </div>
//         <div className="option-card" onClick={() => window.location.href="/departments"}>
//           <h2>Departments</h2>
//           <p>View and organize departments.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import './App.css';
// import React, { useState } from "react";
// import axios from "axios";

// const PatientForm = () => {
//   const [patientID, setPatientID] = useState("");
//   const [patientName, setPatientName] = useState("");
//   const [DOB, setDOB] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [contactNo, setContactNo] = useState("");
//   const [email, setEmail] = useState("");
//   const [insuranceDetails, setInsuranceDetails] = useState("");
//   const [message, setMessage] = useState(""); // Message state for success or error

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const patientData = {
//       patientID, // user-entered patient ID (optional)
//       patient_name: patientName,
//       DOB,
//       gender,
//       address,
//       contactNo,
//       email,
//       insurance_details: insuranceDetails,
//     };

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/api/patients/", patientData);

//       // Check for a success message or an error
//       if (response.data.message) {
//         setMessage(response.data.message); // Set success message
//       } else {
//         setMessage("Patient added successfully!");
//       }
//     } catch (error) {
//       // Handle error during request (e.g., network issues or backend errors)
//       if (error.response) {
//         // Error response from server
//         setMessage(`Error: ${error.response.data.error}`);
//       } else {
//         // Network or other errors
//         setMessage("There was an error submitting the form!");
//       }
//     }
//   };

//   return (
//     <div>
//        <h1 className="form-heading">Hospital Management App</h1> {/* Heading */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Patient ID (Optional)</label>
//           <input
//             type="text"
//             value={patientID}
//             onChange={(e) => setPatientID(e.target.value)}
//             placeholder="Enter Patient ID (Optional)"
//           />
//         </div>

//         <div>
//           <label>Patient Name</label>
//           <input
//             type="text"
//             value={patientName}
//             onChange={(e) => setPatientName(e.target.value)}
//             placeholder="Enter Patient Name"
//           />
//         </div>

//         <div>
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             value={DOB}
//             onChange={(e) => setDOB(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Gender</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label>Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Contact No</label>
//           <input
//             type="text"
//             value={contactNo}
//             onChange={(e) => setContactNo(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Insurance Details</label>
//           <input
//             type="text"
//             value={insuranceDetails}
//             onChange={(e) => setInsuranceDetails(e.target.value)}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {message && <div>{message}</div>} {/* Display message */}
//     </div>
//   );
// };

// export default PatientForm;
