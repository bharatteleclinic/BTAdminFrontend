import React, { useState } from "react";
import "./Doctor.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fetchToCreateNewDoctor} from "../Redux/authCreateNewDoctor"
const CreateNewDoctorPopUp = ({ setIsCreateDoctorPopUpOpen }) => {
  const { newDoctor } = useSelector((state) => state.newDoctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to handle form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    speciality: "",
    number: "",
    email: "",
    password: "",
    user_type: "1",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,"firm data before dispatch---")
    const response=await dispatch(fetchToCreateNewDoctor(formData));
    console.log(response,"reponse after dispatch")
       if(response?.payload?.status==200){
         alert(response?.payload?.data?.message)
         navigate("/doctor")
       }else{
        alert(response?.payload?.message)
       }
  };
  return (
    <>
      <div className="modal_wrapper"></div>
      <div className="admin_create_new_patient_container">
        <div className="addPatient_top">
          <h2>Create New Doctor</h2>
          <i
            onClick={() => setIsCreateDoctorPopUpOpen(false)}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <hr />

        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label>
                First Name<span>*</span>
              </label>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                Speciality<span>*</span>
              </label>
              <select
                name="speciality"
                value={formData.speciality}
                onChange={handleInputChange}
              >
                <option hidden>Select Speciality</option>
                <option value="1">General Physician</option>
                <option value="2">Dentist</option>
                <option value="3">Child specialists</option>
                <option value="4">Counselling Psychologist</option>
                <option value="5">Diabetologist</option>
                <option value="6">Family Physician</option>
                <option value="7">Orthologist</option>
                <option value="8">General Surgery</option>
                <option value="9">Gynaecologist & OB</option>
                <option value="10">Head and Neck Surgery</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Mobile No<span>*</span>
              </label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                Salutation<span>*</span>
              </label>
              <select
              // name="salutation"
              // value={formData.salutation}
              // onChange={handleInputChange}
              >
                <option hidden></option>
                <option>Dr.</option>
                <option>Mr.</option>
                <option>Ms.</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Consultation Type<span>*</span>
              </label>
              <select
              // name="consultationType"
              // value={formData.consultationType}
              // onChange={handleInputChange}
              >
                <option hidden></option>
                <option>Video Consultation</option>
                <option>Clinic Visit</option>
                <option>Walk-In</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button type="reset" className="reset-button">
                Reset
              </button>
              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNewDoctorPopUp;
