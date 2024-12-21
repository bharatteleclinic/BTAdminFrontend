import React from "react";
import "./Billing.css";
const AppointmentPage = () => {
  return (
    <>
      {/* Filters */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by appointment id / Patient"
          className="admin_billing_search_input"
        />
        <input type="date" className="admin_billing_date_input" placeholder="From" />
        <input type="date" className="admin_billing_date_input" />
        <select className="admin_billing_status_select">
          <option selected hidden>
            Doctor
          </option>
          <option>Dr. Kulsum Khan</option>
          <option>Dr. Salim Shiekh</option>
          <option>Dr. Meezan Siddiqui</option>
          <option>Dr. Mohammad Saddam</option>
          <option>Dr. Parvinsultan Sutar</option>
        </select>
        <select className="admin_billing_status_select">
          <option selected hidden>
            Payment Status
          </option>
          <option>Paid</option>
          <option>Unpaid</option>
        </select>

        <button className="admin_billing_filter_btn">&#10004;</button>
        <button className="admin_billing_reset_btn">&#8635;</button>
      </div>

      {/* Table */}
      <table className="admin_billing_appointments_table">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Date</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Consultation Type</th>
            <th>Location</th>
            <th>Invoices</th>
            <th>Total Amount</th>
            <th>Paid</th>
            <th>payment status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>38445</td>
            <td>Nov 23, 2024</td>
            <td>Abhishek Gholap</td>
            <td>Meezan Siddiqui</td>
            <td>Video Consultant</td>
            <td>Mumbai</td>
            <td>1</td>
            <td>Rs 199</td>
            <td>Rs 0</td>
            <td>Unpaid</td>
            <td><i class="fa-regular fa-eye"></i></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AppointmentPage;
