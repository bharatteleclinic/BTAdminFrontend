import React, { useEffect, useState } from "react";
import "./Patient.css";
import { Link, useParams } from "react-router-dom";
import AppointmentPage from "./AppointmentPage";
import EprescriptionPage from "./EprescriptionPage";
import MedicalHistoryPage from "./MedicalHistoryPage";
import InvoicePage from "./InvoicePage";
import GeneralInfoPage from "./GeneralInfoPage";
import FamilyMemberPage from "./FamilyMemberPage";
import {useDispatch, useSelector} from "react-redux";
import {fetchIndivisualPatient} from "../Redux/authIndivisualPatient"
const ViewPatientPage = () => {
  const [page, setPage] = useState("appointment");
  const [selectedTab, setSelectedTab] = useState("appointment");
  const {singlePatientDetail}=useSelector((state)=>state.singlePatient)
  const {id}=useParams();
const dispatch=useDispatch();
console.log(singlePatientDetail.data)
 // Fetch individual patient details if patient_id exists
 useEffect(() => {
  if (id) {
    dispatch(fetchIndivisualPatient(id));
  }
}, [dispatch, id]);

  const handlePageOnClick = (page, data) => {
    setPage(page);
    setSelectedTab(data);
  };

    // Function to calculate age from DOB
    const calculateAge = (dob) => {
      if (!dob) return "-";
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

  const renderComponent = () => {
    switch (page) {
      case "appointment":
        return <AppointmentPage />;

      case "eprescription":
        return <EprescriptionPage />;

      case "medical_history":
        return <MedicalHistoryPage />;

      case "general_info":
        return <GeneralInfoPage />;

      case "invoice":
        return <InvoicePage />;

      case "family_member":
        return <FamilyMemberPage />;

      default:
        return null;
    }
  };

  return (
    <div className="view_patient_page_container">
      {/*  ***Css is coming from Apponitment ******/}
      <div className="appointment-top-heading">
        <h6>Patient</h6>
        <div>
          <button className="admin_appointment_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Create treatment plan</span>
          </button>
        </div>
      </div>
      {/*  ***Css is coming from Apponitment ******/}

      <div className="heading_colored_div">
        <div className="heading_colored_div_top">
          <div className="heading_colored_div_top_left">
            <span>
              <Link to="/patient">Patient List</Link>
            </span>
            <i class="fa-solid fa-greater-than"></i>
            <p>{singlePatientDetail?.data?.data?.personal_info?.full_name || "-"}</p>
          </div>
        </div>

        <div className="heading_colored_div_middl">
          <div id="one">
            <i class="fa-solid fa-user-tie"></i>
            <p>{singlePatientDetail?.data?.data?.personal_info?.full_name || "-"}</p>
          </div>

          <div id="two">
            <div>
              <span>Gender</span>
              <p>{singlePatientDetail?.data?.data?.personal_info?.gender || "-"}</p>
            </div>

            <div>
              <span>Age</span>
              <p>{calculateAge(singlePatientDetail?.data?.data?.personal_info?.birth_date) || "-"}</p>
            </div>

            <div>
              <span>Blood Group</span>
              <p>{singlePatientDetail?.data?.data?.personal_info?.blood_group || "-"}</p>
            </div>
          </div>

          <div id="three">
            <div className="calender_data">
            <p>Thursday</p>
            <p>20 Dec</p>
            </div>

            <div>
            <p>Video Consultation</p>
            <p>09:00 AM</p>
            </div>
          </div>




          <div id="four">
            <div>
              <span>Mobile No</span>
              <p>{singlePatientDetail?.data?.data?.contact_info?.phone || "-"}</p>
            </div>

            <div>
              <span>Referral Name</span>
              <p>-</p>
            </div>

            <div>
              <span>Email</span>
              <p>{singlePatientDetail?.data?.data?.contact_info?.email || "-"}</p>
            </div>
          </div>
        </div>

     

        <div className="view_patient_bottom_heading">
          <div
            onClick={() => handlePageOnClick("appointment", "appointment")}
            className={selectedTab === "appointment" ? "active" : ""}
          >
            Appointment
          </div>

          <div
            onClick={() => handlePageOnClick("eprescription", "eprescription")}
            className={selectedTab === "eprescription" ? "active" : ""}
          >
            E-Prescription
          </div>

          <div
            onClick={() =>
              handlePageOnClick("medical_history", "medical_history")
            }
            className={selectedTab === "medical_history" ? "active" : ""}
          >
            Medical History
          </div>

          <div
            onClick={() => handlePageOnClick("general_info", "general_info")}
            className={selectedTab === "general_info" ? "active" : ""}
          >
            General Info
          </div>

          <div
            onClick={() => handlePageOnClick("invoice", "invoice")}
            className={selectedTab === "invoice" ? "active" : ""}
          >
            Invoice
          </div>

          <div
            onClick={() => handlePageOnClick("family_member", "family_member")}
            className={selectedTab === "family_member" ? "active" : ""}
          >
            Family Member
          </div>
        </div>
      </div>

      <div className="viwAppPageDetal">{renderComponent()}</div>
    </div>
  );
};

export default ViewPatientPage;
