import React from 'react'
import "./Docotr.css";
import { NavLink } from 'react-router-dom';
const UnavailableSlot = () => {

  
  return (
    <div className="slotContainer">
      <div className="slot_top_div">
        <div className='unavIconDiv'>
        <i class="fas fa-hourglass"></i>
        <h6>Slot Management</h6>
        </div>
       
        <div className="unavailable_btn">
        <NavLink to='/slot' >Time slots</NavLink>
        </div>
      </div>

      <div className="slotBottomContainer">
        <div className="slotBottom_left">
          <div className="sbl_top">
            <h3>Slots</h3>
            <div>
            <button id="addSlotBTN" >Mark Unavailability</button> 
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
                  <input type="date"/>

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
        <div className="slotBottom_right">
        <div className="sbr_top">
            <h3>Unavailable Slots</h3>
            <select>
                <option>Video</option>
                <option>Clinic Visit</option>
                <option selected>Both</option>
            </select>
          </div>
          <hr/>
               {/* Table */}
    <table className="appointments-table">
      <thead>
        <tr>
          <th>Slot</th>
          <th>Consultation Type</th>
          <th>Status</th>
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
  )
}

export default UnavailableSlot
