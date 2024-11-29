import React from "react";
import "./Patient.css";
const CreateNewPatientPopUp = ({ setIspopUpOpen }) => {
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

        <form>
          <div>
            <div class="form-group">
              <label for="first-name">
                First Name<span>*</span>
              </label>
              <input type="text" id="first-name"/>
            </div>
            <div class="form-group">
              <label for="gender">Gender</label>
              <select id="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="form-group">
              <label for="mobile-no">
                Mobile No<span>*</span>
              </label>
              <input type="text" id="mobile-no"/>
            </div>
            <div class="form-group">
              <label for="email-id">Email ID</label>
              <input type="email" id="email-id" />
            </div>
            <div class="form-group">
              <label for="referral">Referral</label>
              <input type="text" id="referral"  />
            </div>
          </div>

          <div>
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name"  />
            </div>

            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" id="age"  />
            </div>

            <div class="form-group">
              <label for="aadhaar">Aadhaar Number</label>
              <input type="text" id="aadhaar"  />
            </div>

            <div class="form-group">
              <label for="clinic-id">
                Clinic Patient ID<span>*</span>
              </label>
              <input
                type="text"
                id="clinic-id"
              />
            </div>

            <div class="form-group">
              <label for="password">
                Password<span>*</span>
              </label>
              <input type="password" id="password"  />
            </div>
            <div class="form-buttons">
              <button type="reset" class="reset-button">
                Reset
              </button>
              <button type="submit" class="register-button">
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
