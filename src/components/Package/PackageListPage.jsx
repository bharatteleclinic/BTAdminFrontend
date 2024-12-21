import React from "react";

const PackageListPage = () => {
  return (
    <div>
      <form>
        <div className="admin_inventory_filter_section">
          <input
            type="text"
            placeholder="Search by Product Name"
            className="search-input"
          />
          <button className="admin_inventory_search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="admin_inventory_reset_btn">&#8635;</button>
        </div>
      </form>
      {/* Table */}
      <div className="admin_inventory_last_div">
        <table className="admin_inventory_table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th> Treatment ID</th>
              <th> Treatment Name </th>
              <th> No of Visits</th>
              <th>Amount</th>
              <th>Actions</th>
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
  );
};

export default PackageListPage;
