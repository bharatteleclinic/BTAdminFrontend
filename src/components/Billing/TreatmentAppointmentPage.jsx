import React from 'react'
import "./Billing.css"
const TreatmentAppointmentPage = () => {
  return (
    <>
      {/* Filters */}
      <div className="filter-section">
     <input
       type="text"
       placeholder="Search by patient name"
       className="admin_billing_search_input"
     />
  
     <select className="admin_billing_status_select">
       <option selected hidden>
         Select Treatment
       </option>
     </select>

     <button className="admin_billing_filter_btn">&#10004;</button>
     <button className="admin_billing_reset_btn">&#8635;</button>
   </div>
    </>
   
  )
}

export default TreatmentAppointmentPage
