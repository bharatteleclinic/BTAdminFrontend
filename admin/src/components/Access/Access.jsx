import React, { useState } from "react";
import "./Access.css";
import RoleAndPermissionPage from "./RoleAndPermissionPage";
import UsersPage from "./UsersPage";
const Access = () => {
  const [selectedTab, setSelectedTab] = useState("roleandpermission");
  const [data, setData] = useState("roleandpermission");

  const renderComponent = () => {
    switch (selectedTab) {
      case "roleandpermission":
        return <RoleAndPermissionPage />;
      case "users":
        return <UsersPage />;
      default:
        null;
    }
  };
  const handleOnClick = (data, tab) => {
    setData(data);
    setSelectedTab(tab);
  };
  return (
    <div className="admin_access_container">
      <div className="admin_access_top_heading">
        <h6>Access</h6>
        <div>
          {/* Css is coming from another component */}
          <button className="admin_access_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Create Role</span>
          </button>
        </div>
      </div>
      <hr/>
      {/* Second Div */}
      <div className="admin_access_second_div">
        <div className="admin_access_tabs">
          <ul>
            <li
              onClick={() =>
                handleOnClick("roleandpermission", "roleandpermission")
              }
              className={data === "roleandpermission" ? "active" : ""}
            >
              Roles & Permission
            </li>
            <li
              onClick={() => handleOnClick("users", "users")}
              className={data === "users" ? "active" : ""}
            >
              Users
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Table */}
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Access;
