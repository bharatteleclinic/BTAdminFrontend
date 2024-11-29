import React from 'react'

const SupplierPage = () => {
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
            <th>Supplier Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SR. Zam Pharama</td>
            <td>9867583683</td>
            <td>srzampharma@gmail.com</td>
            <td>Mumbai, Mumbai, Mumbai, Mharashtra, India, 396445</td>
            <td id='admin_inventory_action'><i class="fa-regular fa-pen-to-square"></i>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default SupplierPage
