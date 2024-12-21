import React from 'react'
import "./Inventory.css"
const StockInPage = () => {
  return (
    <div>
    <form>
      <div className="admin_inventory_filter_section">
        <input type="text" placeholder="Search by Supplier Name" className="search-input" />
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
          <th>Stock In ID</th>
          <th>Item No</th>
          <th>Date</th>
          <th>Location</th>
          <th>Supplier Name</th>
          <th>Reference No</th>
          <th>Total Cost (Rs)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>43</td>
          <td>1</td>
          <td>February 12, 2024</td>
          <td>Mumbai</td>
          <td>SR. Zam Pharama</td>
          <td>43</td>
          <td>5000</td>
          <td id='admin_inventory_action'><i class="fa-regular fa-eye"></i></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
}

export default StockInPage
