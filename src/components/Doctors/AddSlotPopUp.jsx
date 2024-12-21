import React, { useState } from "react";
import "./Doctor.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const AddSlotPopUp = ({ closeModal }) => {
  const navigate=useNavigate();
  const [slotData, setSlotData] = useState({
    clinic_name: "Bharat TeleClinic",
    date:"",
    start_time: "",
    end_time: "",
    available_week: {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    },
    slot_duration: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   // Convert available_week object to a "1,0" string format
  const formattedSlotData = {
    ...slotData,
    available_week: Object.values(slotData.available_week).join(","),
  };
    dispatch(createDoctorSlot(formattedSlotData));
    navigate("/slot")
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  if (type === "checkbox") {
    setSlotData((prev) => {
      const updatedWeek = { ...prev.available_week };
      updatedWeek[value] = checked ? 1 : 0; // 1 for checked, 0 for unchecked
      return {
        ...prev,
        available_week: updatedWeek,
      };
    });
  } else {
    setSlotData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  };
  return (
    <>
      <div className="modal_wrapper" onClick={closeModal} ></div>
      <div className="popUpContainer">
        <div className="popUpTop">
          <h2>Add Slots</h2>
          <i onClick={closeModal} class="fa-solid fa-xmark"></i>
        </div>
        <hr />

        <form onSubmit={handleSubmit}>
          <div className="addSlot_top">
            <div className="addSlot_labelAND_select">
              <label>
                Clinic Name<span>*</span>
              </label>
              <select name="clinic_name" value={slotData.clinic_name}  onChange={handleChange}>
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
                value={slotData.date}
                   name="date"
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
         
               {Object.keys(slotData.available_week).map((day) => (
    <label key={day}>
      <input
        type="checkbox"
        value={day}
        checked={slotData.available_week[day] === 1}
        onChange={handleChange}
      />
      {day}
    </label>
  ))}
        
            </div>
          </div>

          <div className="popUpLastDiv">
            <div className="addSlot_top">
              <div className="addSlot_labelAND_select">
                <label>
                  Start Time<span>*</span>
                </label>
                <input
                  type="time"
                  onChange={handleChange}
                  value={slotData.start_time}
                  name="start_time"
                />
              </div>

              <div className="addSlot_labelAND_select">
                <label>
                  End Time<span>*</span>
                </label>
                <input
                  type="time"
                  onChange={handleChange}
                  value={slotData.end_time}
                  name="end_time"
                />
              </div>

              <div className="addSlot_labelAND_select">
                <label>
                  Slot Duration(In Mins)<span>*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={slotData.slot_duration}
                  name="slot_duration"
                />
              </div>
            </div>
          </div>
          <div className="LastDivBtn">
            <button type="reset" id="deleteBTN">
              Reset
            </button>
            <button type="submit" id="addSlotBTN">
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSlotPopUp;
