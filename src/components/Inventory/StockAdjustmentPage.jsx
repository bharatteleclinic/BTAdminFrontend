import React from 'react'

const StockAdjustmentPage = () => {
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
          <th>Stock Adjustment ID</th>
          <th>Product Item</th>
          <th>Date</th>
          <th>Location</th>
          <th>Created By</th>
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

export default StockAdjustmentPage
