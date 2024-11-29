import React, { useState } from "react";
import "./Package.css";
import PackageListPage from "./PackageListPage";
import TreatmentPlan from "./TreatmentPlan";
const Package = () => {
  const [selectedTab, setsSelectedTab] = useState("packagelist");
  const [data, setData] = useState("packagelist");
  const renderComponent = () => {
    switch (selectedTab) {
      case "packagelist":
        return <PackageListPage />;
      case "treatmentplan":
        return <TreatmentPlan />;
      default:
        null;
    }
  };

  const handleClick=(data,tab)=>{
setData(data);
setsSelectedTab(tab)
  }
  return (
    <div className="admin_package_container">
      <div className="admin_package_top_heading">
        <h6>Inventory</h6>
      </div>
      <hr />
      {/* Second Div  CSS coming from inventory component*/}
      <div className="admin_inventory_second_div">
        <div className="admin_inventory_tabs">
          <ul>
            <li onClick={()=>handleClick("packagelist","packagelist")} 
             className={data === "packagelist" ? "active" : ""}
                >Package List</li>
            <li onClick={()=>handleClick("treatmentplan","treatmentplan")}
                    className={data === "treatmentplan" ? "active" : ""}
                >Package Treatment Plans</li>
          </ul>
        </div>
      </div>
      <hr />

      <div>{renderComponent()}</div>
    </div>
  );
};

export default Package;
