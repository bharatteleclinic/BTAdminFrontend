import React from "react";

const CreateNewAppointmentPopUp = () => {
  return (
    <div className="create_appointment_popup_container">
      <div>
        <label>
          Patients<span>*</span>
        </label>
        <input type="text" />
        <input type="text" />
      </div>

      <div>
        <div>
          <label>
            Select Speciality<span>*</span>
          </label>
          <select>
          <option>Video Consultation</option>
        </select>
        </div>

        <div>
          <label>
            Select Doctor<span>*</span>
          </label>
          <select>
          <option>Video Consultation</option>
        </select>
        </div>
      </div>

      <div>
        <label>
          Consultation Type<span>*</span>
        </label>
        <select>
          <option>Video Consultation</option>
        </select>
      </div>
    </div>
  );
};

export default CreateNewAppointmentPopUp;
