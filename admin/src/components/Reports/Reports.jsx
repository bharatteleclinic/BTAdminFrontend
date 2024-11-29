import React from "react";
import "./Reports.css";
const Reports = () => {
  return (
    <div className="admin_report_container">
      <div className="admin_report_heading">
        <h6>Reports</h6>
      </div>

      <div className="admin_report_bottom_div">
        {/* <!-- Appointment Section --> */}
        <div className="admin_report_section">
          <h4>Appointment</h4>
          <div className="admin_report_items">
            <div>
              <div className="item">
                <i className="icon">👤</i> By Patients
              </div>

              <div className="item">
                <i className="icon">🔄</i> Follow Up
              </div>
            </div>

            <div>
              <div className="item">
                <i className="icon">👨‍⚕️</i> By Doctors
              </div>
              <div className="item">
                <i className="icon">📋</i> By Speciality
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Billing admin_report_section --> */}
        <div className="admin_report_section">
          <h4>Billing</h4>
          <div className="admin_report_items">
            <div className="item">
              <i className="icon">📄</i> Invoice
            </div>
            <div className="item">
              <i className="icon">💳</i> Payment
            </div>
          </div>
        </div>

        {/* <!-- Revenue admin_report_section --> */}
        <div className="admin_report_section">
          <h4>Revenue</h4>
          <div className="admin_report_items">
            <div className="item">
              <i className="icon">👨‍⚕️</i> By Doctors
            </div>
            <div className="item">
              <i className="icon">📋</i> By Speciality
            </div>
          </div>
        </div>

        {/* <!-- Others admin_report_section --> */}
        <div className="admin_report_section">
          <h4>Others</h4>
          <div className="admin_report_items">
            <div className="item">
              <i className="icon">👨‍⚕️</i> Doctors
            </div>
            <div className="item">
              <i className="icon">👤</i> Patients
            </div>
            <div className="item">
              <i className="icon">💊</i> Drugs
            </div>
          </div>
        </div>

        {/* <!-- Inventory admin_report_section --> */}
        <div className="admin_report_section">
          <h4>Inventory</h4>
          <div className="admin_report_items">
            <div>
              <div className="item">
                <i className="icon">📦</i> Stock Overview
              </div>
              <div className="item">
                <i className="icon">🔄</i> Stock Transaction
              </div>
            </div>

            <div>
              <div className="item">
                <i className="icon">⚠️</i> Reorder Level
              </div>
              <div className="item">
                <i className="icon">⬆️</i> High Turnaround
              </div>
            </div>

            <div>
              <div className="item">
                <i className="icon">⏳</i> Stock Expired
              </div>
              <div className="item">
                <i className="icon">🔁</i> Stock Transferred
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
