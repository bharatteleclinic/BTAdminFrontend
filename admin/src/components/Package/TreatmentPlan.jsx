import React from "react";
import "./Package.css";
const TreatmentPlan = () => {
  return (
    <>
      {/* Table */}
      <div className="admin_inventory_last_div">
        <table className="admin_inventory_table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th> Code</th>
              <th> Treatment Name </th>
              <th> Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5">No Data Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TreatmentPlan;
