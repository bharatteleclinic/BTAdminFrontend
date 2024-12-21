import React, { useState } from "react";
import "./Doctor.css";

const DeleteSlotPopUp = ({closeModalDelete}) => {
  const [deleteSlotData, setDeleteSlotData] = useState({
    clinic_name: "Bharat TeleClinic",
    consultation_type: "Video Consultation",
    start_date: "",
    end_date: "",
    available_days: [],
    slot_duration: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(deleteSlotData);
    closeModalDelete();
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setDeleteSlotData((prev) => ({...prev,available_days: checked? [...prev.available_days, value]
          : prev.available_days.filter((day) => day !== value),
      }));
    } else {
      setDeleteSlotData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
   <>
       <div className="modal_wrapper" onClick={closeModalDelete}></div>
       <div className="popUpContainer">
      <div className="popUpTop">
        <h2>Delete Slots</h2>
        <i onClick={closeModalDelete} class="fa-solid fa-xmark"></i>
      </div>
      <hr/>


      <form onSubmit={handleSubmit}>
          <div className="addSlot_top">
            <div className="addSlot_labelAND_select">
              <label>
                Clinic Name<span>*</span>
              </label>
              <select name="clinic_name" value={deleteSlotData.clinic_name}  onChange={handleChange}>
                <option value="Bharat TeleClinic">Bharat TeleClinic</option>
              </select>
            </div>

            <div className="addSlot_labelAND_select">
              <label>
                Consultation Type<span>*</span>
              </label>
              <p>Video Consultation</p>
            </div>
          </div>

          <div className="addSlot_top">
            <div className="addSlot_labelAND_select">
              <label>
                Start Date<span>*</span>
              </label>
              <input
                type="date"
                onChange={handleChange}
                value={deleteSlotData.start_date}
                name="start_date"
              />
            </div>

            <div className="addSlot_labelAND_select">
              <label>
                End Date<span>*</span>
              </label>
              <input
                type="date"
                onChange={handleChange}
                value={deleteSlotData.end_date}
                name="end_date"
              />
            </div>
          </div>

          <div className="popUpThirdDiv">
            <span id="daysColor">
              Days
              <span id="daysInsideColor">
                (All days are selected unless particular day is selected)
              </span>
            </span>
            <div className="checkboxInputDiv">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
                (day) => (
                  <label key={day}>
                    <input
                      type="checkbox"
                      value={day}
                      checked={deleteSlotData.available_days.includes(day)}
                      onChange={handleChange}
                    />
                    {day}
                  </label>
                )
              )}
        
            </div>
          </div>


          <div className="popUpLastDiv">
      <input type="radio" name="slot"/> All Slots
      <input type="radio" name="slot"/> Selected Slots
        </div>

       
          <div className="LastDivBtn">
            <button type="reset" id="deleteBTN">
              Reset
            </button>
            <button type="submit" id="addSlotBTN">
            Confirm
            </button>
          </div>
        </form>
    </div>
   </>
  )
}

export default DeleteSlotPopUp;
