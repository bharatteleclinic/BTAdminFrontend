import React, { useState } from 'react'

const EprescriptionPage = () => {
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
              Doctor
            </option>
            <option>Dr. Kulsum Khan</option>
            <option>Dr. Sanauar Ansari</option>
            <option>Dr. Vijay Chaudhary</option>
          </select>

          <button className="appointment-filter-btn">&#10004;</button>
          <button type="submit" className="appointment-reset-btn">
            &#8635;
          </button>
          <button className="book_appointment_btn">Book Appointment</button>
        </div>
      </form>

      <div className="appointment_page_table_div">
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Prescription ID</th>
              <th>Prescribed Date</th>
              <th>Doctor Name</th>
              <th>Drugs</th>
              <th>Action</th>
            </tr>

            
          </thead>
          <tbody>
            <tr>
              <td colSpan="6">No Data Available</td>
            </tr>


          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EprescriptionPage
