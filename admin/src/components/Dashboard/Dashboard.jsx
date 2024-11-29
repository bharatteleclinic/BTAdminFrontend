import React from "react";
import "./Dashboard.css";
import Appointment from "../../assets/Appointment.png";
import UpcomingAppointment from "../../assets/upcoming.png";
import CancelledAppointment from "../../assets/cancelled.png";
import Patient from "../../assets/patient.png";
import DoughnutChart from "../ChartsAndGraph/DoughnutChart";
import HorizontalChart from "../ChartsAndGraph/GenderDistributionChart";
import SingleBarChart from "../ChartsAndGraph/BarChartSingle";
const Dashboard = () => {
  return (
    <>
      <div className="admin_dashboard_container">
        <div className="admin_heading">
          <h6>Dashboard</h6>
        </div>
        <hr id="hrTaginadmin"/>

        <div className="admin_dashboard_cards">
          <div className="admin_d_card">
            <div>
              <p>Today Appointments</p>
              <h2>0</h2>
            </div>
            <div>
              <img src={Appointment} />
            </div>
          </div>

          <div className="admin_d_card">
            <div>
              <p>Upcoming Appointments</p>
              <h2>0</h2>
            </div>
            <div>
              <img src={UpcomingAppointment} />
            </div>
          </div>

          <div className="admin_d_card">
            <div>
              <p>Cancelled Appointments</p>
              <h2>0</h2>
            </div>
            <div>
              <img src={CancelledAppointment} />
            </div>
          </div>

          <div className="admin_d_card">
            <div>
              <p>My Patients</p>
              <h2>6</h2>
            </div>
            <div>
              <img src={Patient} />
            </div>
          </div>
        </div>

        <div className="admin_second_heading">
          <h6>Overview</h6>
          <div>
            <select>
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
              <option>Last 3 Months</option>
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          </div>
        </div>

        <div className="admin_graph_div">
          <div className="admin_left_graph">
            <h4>Appointments</h4>
            <SingleBarChart/>
          </div>
          <div className="admin_right_graph">
          <h4>Appointments by Doctor</h4>
          <DoughnutChart/>
          </div>
        </div>

        <div className="admin_last_div">
          <div className="admin_last_div_card">
            <h4>Revenue by Speciality</h4>
          </div>
          <div className="admin_last_div_card">
          <h4>Service Revenue</h4>
          </div>
          <div className="admin_last_div_card">
          <h4>Payment Mode</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
