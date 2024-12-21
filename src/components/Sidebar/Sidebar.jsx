import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import BTlogo from "../../assets/btimage.jpg";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {

const navigate=useNavigate();

  // State to handle the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleLogOut=()=>{
    console.log("clicked")
    localStorage.removeItem("adminToken")
    window.location.reload();
    navigate("/login")
  }

  return (
    <>
      <div className="admin_sidebar_container">
        <div className="sortcut_links">
          <div>
            <div className="btlogo">
              <img src={BTlogo} alt="logo" />
            </div>
            <hr />

            <NavLink to="/dashboard" className="side-link">
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
          </div>

         
            <div className="side-link" 
            onClick={handleLogOut}
            //  tabIndex="0"  /* Makes the div focusable */
            //  onClick={toggleDropdown}
            //  onBlur={() => setIsDropdownOpen(false)} /* Close when losing focus */
            >
              <i class="fa-solid fa-circle-user"></i>
              <p id="adminName">Sanauar</p>
              <i id="admin_sidebar_download" class="fas fa-caret-down"></i>
            </div>
        
   {/* Dropdown Menu */}
   {/* {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="menu-item">
              <p>Change Password</p>
              <span className="icon">🔒</span>
            </div>
            <div className="menu-item">
              <p onClick={handleLogOut} >Log out</p>
              <span className="icon">↪</span>
            </div>
          </div>
        )} */}


        </div>
      </div>
    </>
  );
};

export default Sidebar;
