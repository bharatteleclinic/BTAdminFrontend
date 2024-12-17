import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Patient from "./components/Patients/Patient";
import Appointment from "./components/Appointments/Appointment";
import Doctor from "./components/Doctors/Doctor";
import EMR from "./components/EMR/EMR";
import Reports from "./components/Reports/Reports";
import Billing from "./components/Billing/Billing";
import Access from "./components/Access/Access";
import Inventory from "./components/Inventory/Inventory";
import Package from "./components/Package/Package";
function App() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="mainContent">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/emr" element={<EMR />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/package" element={<Package />} />
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
