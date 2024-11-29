import React, { useState } from 'react'
import "./Inventory.css"
import ProductPage from './ProductPage';
import SupplierPage from './SupplierPage';
import StockAdjustmentPage from './StockAdjustmentPage';
import StockIssuePage from './StockIssuePage';
import StockInPage from './StockInPage';
import StockOutPage from './StockOutPage';
import StockTransferPage from './StockTransferPage';
import ProductStoragePage from './ProductStoragePage';
const Inventory = () => {
    const [selectedTab, setSelectedTab] = useState("products");
    const [data, setData] = useState("products");
  
    const renderComponent = () => {
      switch (selectedTab) {
        case "products":
          return <ProductPage />;
        case "suppliers":
          return <SupplierPage />;
          case "stockadjustment":
            return <StockAdjustmentPage />;
          case "stockissue":
            return <StockIssuePage />;
            case "stockin":
                return <StockInPage />;
                case "stockout":
                  return <StockOutPage/>;
                case "stocktransfer":
                  return <StockTransferPage />;
                  case "productstorage":
                    return <ProductStoragePage />;
        default:
          null;
      }
    };
    const handleOnClick = (data, tab) => {
      setData(data);
      setSelectedTab(tab);
    };
  return (
    <div className='admin_inventory_container'>
       <div className="admin_inventory_top_heading">
        <h6>Inventory</h6>
        <div>
          {/* Css is coming from another component */}
          <button className="admin_inventory_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Add New Products</span>
          </button>
        </div>
      </div>
      <hr/>

           {/* Second Div */}
           <div className="admin_inventory_second_div">
        <div className="admin_inventory_tabs">
          <ul>
            <li
              onClick={() =>
                handleOnClick("products", "products")
              }
              className={data === "products" ? "active" : ""}
            >
              Products
            </li>
            <li
              onClick={() => handleOnClick("suppliers", "suppliers")}
              className={data === "suppliers" ? "active" : ""}
            >
              Suppliers
            </li>

            <li
              onClick={() => handleOnClick("stockadjustment", "stockadjustment")}
              className={data === "stockadjustment" ? "active" : ""}
            >
              Stock Adjustment
            </li>

            <li
              onClick={() => handleOnClick("stockissue", "stockissue")}
              className={data === "stockissue" ? "active" : ""}
            >
              Stock Issue
            </li>

            <li
              onClick={() => handleOnClick("stockin", "stockin")}
              className={data === "stockin" ? "active" : ""}
            >
              Stock In
            </li>

            <li
              onClick={() => handleOnClick("stockout", "stockout")}
              className={data === "stockout" ? "active" : ""}
            >
              Stock Out
            </li>

            <li
              onClick={() => handleOnClick("stocktransfer", "stocktransfer")}
              className={data === "stocktransfer" ? "active" : ""}
            >
              Stock Transfer
            </li>

            <li
              onClick={() => handleOnClick("productstorage", "productstorage")}
              className={data === "productstorage" ? "active" : ""}
            >
              Product Storage
            </li>
          </ul>
        </div>
      </div>

      <hr />
      {/* Table */}
      <div>{renderComponent()}</div>


    </div>
  )
}

export default Inventory
