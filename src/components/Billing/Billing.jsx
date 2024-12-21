import React, { useState } from "react";
import "./Billing.css";
import AppointmentPage from "./AppointmentPage";
import TreatmentAppointmentPage from "./TreatmentAppointmentPage";
const Billing = () => {
  const [data, setData] = useState("appointment");
  const [selectedTab, setSelectedTab] = useState("appointment");

  const renderComponent = () => {
    switch (selectedTab) {
      case "appointment":
        return <AppointmentPage />;
      case "treatmentappointment":
        return <TreatmentAppointmentPage />;
      default:
        null;
    }
  };

  const handleOnClick = (data,tab) => {
    setData(data);
    setSelectedTab(tab);
  };

  return (
    <div className="admin_billing_container">
      <div className="admin_billing_heading">
        <h6>Dashboard</h6>
      </div>
      <hr/>
      {/* second div */}
      <div className="admin_billing_second_div">
        <div className="admin_billing_tabs">
          <ul>
            <li
              onClick={() => handleOnClick("appointment","appointment")}
              className={data === "appointment" ? "active" : ""}
            >
              Appointment
            </li>
            <li
              onClick={() => handleOnClick("treatmentappointment","treatmentappointment")}
              className={data === "treatmentappointment" ? "active" : ""}
            >
              Treatment Appointment
            </li>
          </ul>
        </div>
      </div>
      <hr />

      {/* Table */}
      <div className="appointment_table_div">{renderComponent()}</div>
    </div>
  );
};

export default Billing;
