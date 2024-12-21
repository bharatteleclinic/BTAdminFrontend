import React, { useEffect, useState } from "react";
import "./Doctor.css";
import CreateNewDoctorPopUp from "./CreateNewDoctorPopUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorList } from "../Redux/authDoctorList";
import { useNavigate, useParams } from "react-router-dom";
const Doctor = () => {
  const {doctor_id}=useParams();
  const [isCreateDoctorPopUpOpen, setIsCreateDoctorPopUpOpen] = useState(false);
  const { doctor_list } = useSelector((state) => state.doctorList);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchDoctorList());
  },[dispatch]);

  const viewDoctorPage=(doctor_id)=>{
  navigate(`/doctor/view/${doctor_id}`)
  }
  return (
    <>
      <div className="admin_doctor_container">
        <div className="admin_doctor_top_div">
          <h6>Doctors</h6>
          <button className="admin_doctor_create_btn">
            <i class="fa-solid fa-plus"></i>
            <span onClick={() => setIsCreateDoctorPopUpOpen(true)}>
              Create Doctor
            </span>
          </button>
          {isCreateDoctorPopUpOpen && (
            <CreateNewDoctorPopUp
              setIsCreateDoctorPopUpOpen={setIsCreateDoctorPopUpOpen}
            />
          )}
        </div>
        <hr />

        {/* second div */}
        <form>
          <div className="admin_doctor_filter_section">
            <select className="status-select">
              <option>Doctor with Profile</option>
              <option>Doctor without Profile</option>
            </select>

            <input type="text" placeholder="Search" className="search-input" />
            <button className="admin_search_btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="admin_reset_btn">&#8635;</button>
          </div>
        </form>

        {/* Bottom div */}
        <div className="admin_doctor_botton_div">
          {
            doctor_list?.data?.data.map((doctor,index)=>(
              <div className="admin_doctor_card" key={index} onClick={()=>viewDoctorPage(doctor.doctor_id)}>
              <div className="admin_doctor_card_section_with_toggle">
                <div className="admin_doctor_profile">
                  <i class="fa-solid fa-user-large"></i>
                  <p>{`Dr. ${doctor.full_name} (${doctor.qulification})`}</p>
                </div>

                <div className="admin_doctor_card_sectionRight">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check" className="status_button"></label>
                </div>
              </div>
              <hr id="admin_doctor_hr" />

              <div className="admin_doctor_card_section">
                <div className="admin_doctor_card_section_specality">
                  <span>Speciality</span>
                  <p>{doctor.specility}</p>
                </div>
              </div>
              <hr id="admin_doctor_hr" />

              <div className="admin_doctor_card_section">
                <div className="admin_doctor_card_section_value">
                  <span>Date of Birth</span>
                  <p>{doctor.dob}</p>
                </div>
                <div className="admin_doctor_card_section_value">
                  <span>Experience</span>
                  <p>{`${doctor.experience} Years of Experience`}</p>
                </div>
              </div>
              <hr id="admin_doctor_hr" />

        
              <div className="admin_doctor_card_last_div">
                <span id="admin_edit_icon">
                  Mode of Consultation
                  <i class="fa-regular fa-pen-to-square"></i>
                </span>
                <button>
                  <i class="fa-solid fa-video"></i> Video Consultation
                </button>
              </div>
  
            </div>
            ))
           
          }
        </div>
      </div>
    </>
  );
};

export default Doctor;
