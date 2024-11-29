import React from "react";

const RoleAndPermissionPage = () => {
  return (
    <div>
      <form>
        <div className="admin_access_filter_section">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="admin_access_search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="admin_access_reset_btn">&#8635;</button>
        </div>
      </form>
      {/* Table */}
      <div className="admin_access_last_div">
      <table className="admin_access_table">
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="no_admin_emr_data">
              No Appointments Found
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RoleAndPermissionPage;
