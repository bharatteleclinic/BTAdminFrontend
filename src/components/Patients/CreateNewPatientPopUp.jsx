import React, { useState } from "react";
import "./Patient.css";
import { useDispatch, useSelector } from "react-redux";
import {fetchToCreateNewPatient} from "../Redux/authCreateNewPatient";
import { useNavigate } from "react-router-dom";
const CreateNewPatientPopUp = ({ setIspopUpOpen }) => {
  const{newPatient}=useSelector((state)=>state.newPatient)
  const dispatch=useDispatch();
  const navigate=useNavigate();
   // State to hold form data
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email:"",
    password: "",
    gender: "",
    dob: "",
    aadhar_no: "",
    number: "",
    referral: "",
    id: "",
    user_type:"3",
  });

    // Handle input change
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };

      // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData,"form data dispatched");
    const response=await dispatch(fetchToCreateNewPatient(formData));
    if(response?.payload?.message){
      alert(response.payload.message)
    }else{
      navigate("/patient");
    }
   
  };
  return (
    <>
      <div className="modal_wrapper"></div>
      <div className="admin_create_new_patient_container">
        <div className="addPatient_top">
          <h2>Create New Patient</h2>
          <i
            onClick={() => setIspopUpOpen(false)}
            class="fa-solid fa-xmark"
          ></i>
        </div>
        <hr />

        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label htmlFor="fname">
                First Name<span>*</span>
              </label>
              <input
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="number">
                Mobile No<span>*</span>
              </label>
              <input
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
            
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="referral">Referral</label>
              <input
                type="text"
                id="referral"
                value={formData.referral}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="text"
                id="dob"
                placeholder="DD/MM/YYYY"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="aadhar_no">Aadhar Number</label>
              <input
                type="text"
                id="aadhar_no"
                value={formData.aadhar_no}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">
                Clinic Patient ID<span>*</span>
              </label>
              <input
                type="text"
                id="id"
                value={formData.id}
                onChange={handleChange}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              
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

export default CreateNewPatientPopUp;
