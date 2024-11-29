import React from "react";
import "./EMR.css";
const EMR = () => {
  return (
    <div className="admin_emr_container">
      <div className="admin_emr_top_heading">
        <h6>EMR</h6>
        <div>
          {/* Css is coming from another component */}
          <button className="admin_appointment_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Create Form</span>
          </button>
        </div>
      </div>
      <hr />
      <div className="admin_emr_middle_div">
    
          <i class="fa-solid fa-magnifying-glass"></i>
    
        <input type="text" placeholder="Search by Form Name" />
      </div>
      <div className="admin_emr_last_div">


      <table className="admin_emr_table">
    <thead>
      <tr>
        <th>Form Name</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="3" className="no_admin_emr_data">
          No Appointments Found
        </td>
      </tr>
    </tbody>
  </table>




      </div>
    </div>
  );
};

export default EMR;
