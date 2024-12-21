import React from 'react'

const ProductPage = () => {
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
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Category Type</th>
            <th>Unit Type</th>
            <th>Reorder Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dolo</td>
            <td>D101</td>
            <td>Patient Sale</td>
            <td>Box</td>
            <td>0</td>
            <td id='admin_inventory_action'><i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-regular fa-eye"></i>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ProductPage
