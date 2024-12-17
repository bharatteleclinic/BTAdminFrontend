import React, { useState } from "react";
import "./Patient.css";
import CreateNewPatientPopUp from "./CreateNewPatientPopUp";
const Patient = () => {
  const [ispopUpOpen,setIspopUpOpen]=useState(false);
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
        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>

        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>







        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>






        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>






        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>



        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>




        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>



        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>




        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>




        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>




        <div className="admin_patient_card">
          <div className="card_section">
            <div className="admin_patient_profile">
              <i class="fa-solid fa-user-large"></i>
              <p>Abhishek Golap</p>
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
              <p>-</p>
            </div>
          </div>
          <hr />
          <div className="card_section">
            <div className="card_section_value">
              <span>Blood Group</span>
              <p>-</p>
            </div>

            <div className="card_section_value">
              <span>Mobile No.</span>
              <p>7303241398</p>
            </div>
          </div>
          <button className="admin_patient_view_btn">View Patient</button>
        </div>


      </div>
    </div>
  );
};

export default Patient;
