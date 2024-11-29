import React from "react";
import "./Sidebar.css";
import BTlogo from "../../assets/btimage.jpg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="admin_sidebar_container">
        <div className="sortcut_links">
          <div className="btlogo">
            <img src={BTlogo} alt="logo" />
          </div>
          <hr />

          <NavLink to="/" className="side-link">
            <i class="fa-solid fa-bars"></i>
            <p>Dashboard</p>
          </NavLink>

          <NavLink to="/patient" className="side-link">
            <i class="fa-solid fa-user"></i>
            <p>Patient</p>
          </NavLink>

          <NavLink to="/appointment" className="side-link">
            <i class="fa-solid fa-calendar-check"></i>
            <p>Appointment</p>
          </NavLink>

          <NavLink to="/doctor" className="side-link">
            <i class="fa-solid fa-user-doctor"></i>
            <p>Doctor</p>
          </NavLink>

          <NavLink to="/emr" className="side-link">
            <i class="fa-solid fa-file-medical"></i>
            <p>EMR</p>
          </NavLink>

          <NavLink to="/reports" className="side-link">
            <i class="fa-solid fa-file"></i>
            <p>Reports</p>
          </NavLink>

          <NavLink to="billing" className="side-link">
            <i class="fa-solid fa-file-invoice"></i>
            <p>Billing</p>
          </NavLink>

          <NavLink to="/access" className="side-link">
            <i class="fa-solid fa-users"></i>
            <p>Access</p>
          </NavLink>

          <NavLink to="/inventory" className="side-link">
            <i class="fa-solid fa-boxes-stacked"></i>
            <p>Inventory</p>
          </NavLink>

          <NavLink to="/package" className="side-link">
            <i class="fa-solid fa-box"></i>
            <p>Package</p>
          </NavLink>

          <div className="side-link">
            <i class="fa-solid fa-circle-user"></i>
            <p>AdminName</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
