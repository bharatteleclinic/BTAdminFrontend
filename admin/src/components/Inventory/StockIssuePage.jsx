import React from 'react'

const StockIssuePage = () => {
  return (
    <div>
    <form>
      <div className="admin_inventory_filter_section">
        <input type="text" placeholder="Search by Issue to" className="search-input" />
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
          <th>Stock Issue ID</th>
          <th>Product Item</th>
          <th>Date</th>
          <th>Location</th>
          <th>Issue To</th>
          <th>Ref No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="7">No Record Found</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default StockIssuePage
