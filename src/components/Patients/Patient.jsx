import React, { useEffect, useState } from "react";
import "./Patient.css";
import CreateNewPatientPopUp from "./CreateNewPatientPopUp";
import { useDispatch,useSelector } from "react-redux";
import { fetchPatientList } from "../Redux/authPatientList";
import { useNavigate, useParams } from "react-router-dom";
import { fetchIndivisualPatient } from "../Redux/authIndivisualPatient";
const Patient = () => {
  const navigate=useNavigate();
  const [ispopUpOpen,setIspopUpOpen]=useState(false);
const dispatch=useDispatch();
const{patient_list}=useSelector((state)=>state.patientList);
useEffect(()=>{
    dispatch(fetchPatientList());
  },[dispatch])

  const handleViewPatient=(patient_id)=>{
    navigate(`/patient/view/${patient_id}`); // Navigate to the route with the appointment ID
  }
  return (
    <div className="admin_patient_container">
      <div className="admin_patient_top_div">
        <div className="admin_patient_heading">
          Patients
          <span>(8)</span>
        </div>
      
        {/* Filters */}
        <div className="filter-section">
          <form>
          <select className="status-select">
            <option hidden>Select Type</option>
            <option>Name</option>
            <option>Phone Number</option>
            <option>Clinic's Patient ID</option>
          </select>

          <input type="text" placeholder="Search" className="search-input" />
          <button className="admin_search_btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="reset" className="admin_reset_btn">&#8635;</button>
          </form>
        

          <button className="admin_download_btn">
            <i class="fa-solid fa-arrow-down"></i>
            <span>Download All</span>
          </button>
          <button onClick={()=>setIspopUpOpen(true)} className="admin_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span>Create New Patient</span>
          </button>
          {
            ispopUpOpen && <CreateNewPatientPopUp setIspopUpOpen={setIspopUpOpen}/>
          }
       
      </div>
        </div>

      <div className="admin_patient_botton_div">
{
  patient_list?.data?.data?.map((patient,index)=>(
    <div className="admin_patient_card" key={index}>
    <div className="card_section">
      <div className="admin_patient_profile">
        <i class="fa-solid fa-user-large"></i>
        <p>{patient.full_name}</p>
      </div>
      <div className="card_sectionRight">
        <i class="fa-regular fa-eye"></i>
        <span>5</span>
      </div>
    </div>
    <hr />
    <div className="card_section">
      <div className="card_section_value">
        <span>Age</span>
        <p>24</p>
      </div>

      <div className="card_section_value">
        <span>Date Of Birth</span>
        <p>{patient.birth_date}</p>
      </div>
    </div>
    <hr />
    <div className="card_section">
      <div className="card_section_value">
        <span>Blood Group</span>
        <p>{patient.blood_group}</p>
      </div>

      <div className="card_section_value">
        <span>Mobile No.</span>
        <p>{patient.mobile_no}</p>
      </div>
    </div>
    <button className="admin_patient_view_btn" onClick={()=>handleViewPatient(patient.patient_id)}>View Patient</button>
  </div>

  ))
}
      </div>
    </div>
  );
};

export default Patient;
