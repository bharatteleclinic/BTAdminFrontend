import React, { useState } from 'react'
import "./Doctor.css"
const FeeStructure = () => {
    // State for search input
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
  
    const handleOnClick = (data, tab) => {
      setData(data);
      setSelectedTab(tab);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSearchInput("");
      setStartDate("");
      setEndDate("");
    };
  return (
    <>
  {/* Filters */}
  <form onSubmit={handleSubmit}>
  <div className="appointment_filter_section">
    <input
      type="text"
      placeholder="Search by Appointment ID"
      className="appointment_page_search_input"
      id="seachInput"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <input
      type="date"
      className="appointment_page_date_input"
      placeholder="From"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
    />
    <input
      type="date"
      className="appointment_page_date_input"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
      placeholder="To"
    />
    <select className="appointment_page_status_select">
      <option selected hidden>
        Payment Status
      </option>
      <option>All</option>
      <option>Paid</option>
      <option>Unpaid</option>
    </select>

    <button className="appointment-filter-btn">&#10004;</button>
    <button type="submit" className="appointment-reset-btn">
      &#8635;
    </button>
  </div>
</form>

{/* Table */}
<div className="appointment_page_table_div">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Fee</th>
              <th>Form</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>39246</td>
              <td>Nov 29, 2024</td>
              <td>11:20 AM</td>
              <td>Dr. Meezan Siddiqui</td>
           
           
            </tr>
          </tbody>
        </table>
      </div>

</>
  )
}

export default FeeStructure
