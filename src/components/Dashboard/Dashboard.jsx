import React from "react";
import "./Dashboard.css";
import DoughnutChart from "../ChartsAndGraph/DoughnutChart";
import SingleBarChart from "../ChartsAndGraph/BarChartSingle";
const Dashboard = () => {
  return (
    <>
      <div className="admin_dashboard_container">
        <div className="dashboard_heading">
          <h6>Dashboard</h6>
        </div>

        <div className="admin_dashboard_cards">
          {/* <div> */}
            <div className="admin_d_card">
              <div className="admin_card_heading">
                <p>Total Patient</p>
                <h3>12</h3>
              </div>
                <i class="fa-solid fa-users"></i>
            </div>

            <div className="admin_d_card">
              <div className="admin_card_heading">
                <p>Total Appointments</p>
                <h3>26</h3>
              </div>
              <i class="fa-solid fa-calendar-check"></i>
            </div>
          {/* </div> */}

          {/* <div> */}
            <div className="admin_d_card">
              <div className="admin_card_heading">
                <p>Total Doctor</p>
                <h3>6</h3>
              </div>
                <i class="fa-solid fa-user-doctor"></i>
            </div>

            <div className="admin_d_card">
              <div className="admin_card_heading">
                <p>Unpaid Invoces</p>
                <h3>786</h3>
              </div>
              <i class="fa-solid fa-file-invoice"></i>
            </div>
          </div>
        {/* </div> */}

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
            <SingleBarChart />
          </div>
          <div className="admin_right_graph">
            <h4>Appointments by Doctor</h4>
            <DoughnutChart />
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
