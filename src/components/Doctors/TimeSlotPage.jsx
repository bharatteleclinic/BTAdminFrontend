import React, { useState } from 'react'
import "./Doctor.css"
import AddSlotPopUp from "./AddSlotPopUp";
import DeleteSlotPopUp from "./DeleteSlotPopUp"
import { NavLink } from "react-router-dom";
const TimeSlotPage = () => {
  const [ispopUpOpen,setIspopUpOpen]=useState(false);
  const [isDeletePopUpOpen,setIsDeletePopUpOpen]=useState(false);
  const closeModal=()=> setIspopUpOpen(false);
  const closeModalDelete=()=>setIsDeletePopUpOpen(false);
  return (
    <div className="slotContainer">
      <div className="unavailable_btn">
      <NavLink to='/unavailableslot'>Unavailable slots</NavLink>
      </div>
    
  

    <div className="slotBottomContainer">
      <div className="slotBottom_left">
        <div className="sbl_top">
          <h3>Slots</h3>
          <div>
          <button id="addSlotBTN" onClick={()=>setIspopUpOpen(true)}>Add Slots</button>
          {
            ispopUpOpen && <AddSlotPopUp closeModal={closeModal}/>
          }
          <button id="deleteBTN" onClick={()=>setIsDeletePopUpOpen(true)}>Delete Slots</button>
          {
            isDeletePopUpOpen && <DeleteSlotPopUp closeModalDelete={closeModalDelete}/>
          }
          </div>
        </div>
        <hr />

        <div className="sbl_middle">
          <div>
            <div className="sblb_top">
              <div className="sbl_middle_bunddle">
                <label>
                  Clinic Name<span>*</span>
                </label>
                <select>
                  <option>Bharat TeleClinic</option>
                </select>
              </div>

              <div className="sbl_middle_bunddle">
                <label>
                  Location<span>*</span>
                </label>
                <select>
                  <option selected hidden></option>
                  <option>Mumbai</option>
                  <option>Nashik</option>
                </select>
              </div>
            </div>

            <div className="sblb_top">
              <div className="sbl_middle_bunddle">
                <label>
                  Start Date<span>*</span>
                </label>
                <input type="date" />

              </div>

              <div className="sbl_middle_bunddle">
                <label>
                  End Date<span>*</span>
                </label>
                <input type="date" placeholder="End Date"/>
              </div>
            </div>
          </div>

          <div className="sblm_view_btn">
            <button>View</button>
          </div>
        </div>

        {/* Table */}
        <div className='appointment_table_div'>
        <table className="appointments-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Days</th>
        <th>Clinic</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="8" className="no-appointments">
          No Appointments Found
        </td>
      </tr>
    </tbody>
  </table>
        </div>
 
      </div>
      <div className="slotBottom_right">
      <div className="sbr_top">
          <h3>Time Slots</h3>
        </div>
        <hr/>
             {/* Table */}
             <div className='appointment_table_div'>
             <table className="appointments-table">
    <thead>
      <tr>
        <th>Slot</th>
        <th>Consultation Type</th>
        <th>Status</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="8" className="no-appointments">
          No Appointments Found
        </td>
      </tr>
    </tbody>
  </table>
             </div>


      </div>
    </div>

    
  </div>
  )
}

export default TimeSlotPage
