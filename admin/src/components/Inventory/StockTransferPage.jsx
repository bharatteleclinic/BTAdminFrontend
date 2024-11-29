import React from 'react'

const StockTransferPage = () => {
  return (
    <div>
    <form>
      <div className="admin_inventory_filter_section">
        <input type="text" placeholder="Search by Product Name" className="search-input" />
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
          <th>Stock Transfer ID</th>
          <th>Date</th>
          <th>From Location</th>
          <th>To Location</th>
          <th>No Of Items</th>
          <th>Total Cost (Rs)</th>
          <th>Action</th>
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

export default StockTransferPage
