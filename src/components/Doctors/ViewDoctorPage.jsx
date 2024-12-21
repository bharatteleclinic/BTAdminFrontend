import React, { useEffect, useState } from 'react'
import "./Doctor.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import GeneralInfoPage from './GeneralInfoPage';
import TimeSlotPage from './TimeSlotPage';
import AppointmentCalendar from './AppointmentCalendar';
import FeeStructure from './FeeStructure';
import EMRForms from './EMRForms';
const ViewDoctorPage = () => {
    const [page, setPage] = useState("generalInfo");
    const [selectedTab, setSelectedTab] = useState("generalInfo");
    const {singlePatientDetail}=useSelector((state)=>state.singlePatient)
    const {id}=useParams();
  const dispatch=useDispatch();
  console.log(singlePatientDetail.data)
   // Fetch individual patient details if patient_id exists
   useEffect(() => {
    if (id) {
    //   dispatch(fetchIndivisualPatient(id));
    }
  }, [dispatch, id]);
  
    const handlePageOnClick = (page, data) => {
      setPage(page);
      setSelectedTab(data);
    };
  
  
    const renderComponent = () => {
      switch (page) {
        case "generalInfo":
          return <GeneralInfoPage />;
  
        case "time_slot":
          return <TimeSlotPage />;
  
        case "appointment_calender":
          return <AppointmentCalendar />;
  
        case "fee_structure":
          return <FeeStructure />;
  
        case "emr_forms":
          return <EMRForms />;
  
        default:
          return null;
      }
    };
  
  return (
    <div className="view_patient_page_container">
    {/*  ***Css is coming from Apponitment ******/}
    <div className="appointment-top-heading">
      <h6>Doctor</h6>
    </div>
    {/*  ***Css is coming from Apponitment ******/}
    <div className="heading_colored_div">
      <div className="heading_colored_div_top">
        <div className="heading_colored_div_top_left">
          <span>
            <Link to="/patient">Doctor List</Link>
          </span>
          <i class="fa-solid fa-greater-than"></i>
          <p>Dr. Name</p>
        </div>
      </div>

      <div className="heading_colored_div_middl">
        <div id="one">
          <i class="fa-solid fa-user-tie"></i>
          <p>Dr. Name (MBBS)</p>
        
        </div>

        <div id="two">
          <div>
            <span>Gender</span>
            <p>Male</p>
          </div>

          <div>
            <span>Date of Birth</span>
            <p>12/12/1992</p>
          </div>

          <div>
            <span>Experience</span>
            <p>20 Years</p>
          </div>
        </div>

        <div id="three">
          <div>
          <span id='three_span'>Speciality</span>
          <p id='three_p'>General Physician</p>
          </div>
        </div>

        <div id="four">
          <div>
            <span>License Number</span>
            <p>74547</p>
          </div>

          <div>
            <span>Mobile No</span>
            <p>8591103137</p>
          </div>

          <div>
            <span>Email</span>
            <p>khandrkulsoom.960501@gmail.com</p>
          </div>
        </div>
      </div>

   

      <div className="view_patient_bottom_heading">
        <div
          onClick={() => handlePageOnClick("generalInfo", "generalInfo")}
          className={selectedTab === "generalInfo" ? "active" : ""}
        >
          General Info
        </div>

        <div
          onClick={() => handlePageOnClick("time_slot", "time_slot")}
          className={selectedTab === "time_slot" ? "active" : ""}
        > 
       Time Slots
        </div>

        <div
          onClick={() =>
            handlePageOnClick("appointment_calender", "appointment_calender")
          }
          className={selectedTab === "appointment_calender" ? "active" : ""}
        >
          Appointment Calendar
        </div>

        <div
          onClick={() => handlePageOnClick("fee_structure", "fee_structure")}
          className={selectedTab === "fee_structure" ? "active" : ""}
        >
Fee Structure
        </div>

        <div
          onClick={() => handlePageOnClick("emr_forms", "emr_forms")}
          className={selectedTab === "emr_forms" ? "active" : ""}
        >
          EMR Forms
        </div>

     
      </div>
    </div>

    <div className="viwAppPageDetal">{renderComponent()}</div>
  </div>
  )
}

export default ViewDoctorPage
