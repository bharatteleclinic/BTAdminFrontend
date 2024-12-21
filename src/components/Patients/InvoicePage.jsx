import React, { useState } from 'react'

const InvoicePage = () => {
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
    <div>
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
          <option>Paid</option>
          <option>Unpaid</option>
        </select>

        <button className="appointment-filter-btn">&#10004;</button>
        <button type="submit" className="appointment-reset-btn">
          &#8635;
        </button>
      </div>
    </form>

    <div className="appointment_page_table_div">
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Invoice No</th>
            <th>Date</th>
            <th>Location</th>
            <th>Fees</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>

          
        </thead>
        <tbody>
          <tr>
            <td colSpan="7">No Data Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default InvoicePage
