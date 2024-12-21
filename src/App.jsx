import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route,BrowserRouter, Navigate } from "react-router-dom";
import Patient from "./components/Patients/Patient";
import Appointment from "./components/Appointments/Appointment";
import Doctor from "./components/Doctors/Doctor";
import EMR from "./components/EMR/EMR";
import Reports from "./components/Reports/Reports";
import Billing from "./components/Billing/Billing";
import Access from "./components/Access/Access";
import Inventory from "./components/Inventory/Inventory";
import Package from "./components/Package/Package";
import Login from "./components/Registration/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes"
import ViewPatientPage from "./components/Patients/ViewPatientPage";
import ViewDoctorPage from "./components/Doctors/ViewDoctorPage";
function App() {
  return (
    <BrowserRouter>
    <div>
      {localStorage.getItem("adminToken")?  <Sidebar />:null}
      
        <div className="mainContent">
        <Routes>
          {
            !localStorage.getItem("adminToken") && (
              <>
                <Route path="/login" element={<Login />} />,
                <Route path="*" element={<Login />} />
              </>
            
            )
          }
      
            {/* Protected Routes */}
          <Route element={<ProtectedRoutes/>}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patient/view/:id" element={<ViewPatientPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/view/:doctor_id" element={<ViewDoctorPage />} />
          <Route path="/emr" element={<EMR />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/package" element={<Package />} />
          </Route>
    
        
        </Routes>
      </div>
      </div>
    </BrowserRouter>
     
  
  );
}

export default App;
