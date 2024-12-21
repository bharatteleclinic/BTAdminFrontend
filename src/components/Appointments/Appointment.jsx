import React, { useState } from "react";
import "./Appointment.css";
import { NavLink } from "react-router-dom";
import TodayAppointment from "./TodayAppointment";
import UpcomingAppointment from "./UpcomingAppointment";
import PastAppointment from "./PastAppointment";
import CancelledAppointment from "./CancelledAppointment";

const Appointment = () => {
  const [data, setData] = useState("app_today");
  const [selectedTab, setSelectedTab] = useState("today");

  // Function to render the component based on the selected tab
  const renderComponent = () => {
    switch (selectedTab) {
      case "today":
        return <TodayAppointment />;
      case "upcoming":
        return <UpcomingAppointment />;
      case "past":
        return <PastAppointment />;
      case "cancelled":
        return <CancelledAppointment />;
      default:
        return null;
    }
  };

  const handleOnClick = (data, tab) => {
    setData(data);
    setSelectedTab(tab);
  };

  return (
    <div className="appointments-container">
      <div className="appointment-top-heading">
        <h6>Appointments</h6>
        <div>
          <button className="admin_appointment_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Create New Appointment</span>
          </button>
        </div>
      </div>
  

      {/* Tabs */}
      <div className="tabs">
        <ul>
          <li
            className={data === "app_today" ? "active" : ""}
            onClick={() => handleOnClick("app_today", "today")}
          >
            Today's
          </li>
          <li
            className={data === "app_up" ? "active" : ""}
            onClick={() => handleOnClick("app_up", "upcoming")}
          >
            Upcoming
          </li>
          <li
            className={data === "app_past" ? "active" : ""}
            onClick={() => handleOnClick("app_past", "past")}
          >
            Past
          </li>
          <li
            className={data === "app_can" ? "active" : ""}
            onClick={() => handleOnClick("app_can", "cancelled")}
          >
            Cancelled
          </li>
        </ul>
      </div>
      <hr/>

      {/* Filters */}
      <form>
      <div className="filter-section">
        <input type="text" placeholder="Search " className="search-input" />

        <select className="status-select">
          <option selected hidden>
            Doctor
          </option>
          <option>Dr. Kulsum Khan</option>
          <option>Dr. Salim Shaikh</option>
          <option>Dr. Meezan Siddiqui</option>
        </select>
        <select className="status-select">
          <option>Paid</option>
          <option>Unpaid</option>
        </select>
        <button className="appointment-filter-btn">&#10004;</button>
        <button type="reset" className="appointment-reset-btn">&#8635;</button>
      </div>
      </form>
  
      {/* Table */}
      <div className="appointment_table_div">{renderComponent()}</div>
    </div>
  );
};

export default Appointment;
