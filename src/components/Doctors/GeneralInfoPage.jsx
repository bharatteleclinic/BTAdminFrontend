import React from 'react'
import "./Doctor.css"
const GeneralInfoPage = () => {
  return (
    <div class="general_info_container">
    <div class="general_info_header">
        <h4>Doctor Info</h4>
        <button class="edit-btn">Edit</button>
    </div>

    <div class="general_info_section">
        <p>Doctor Personal Information</p>
        <div class="info-grid">
            <div>
                <span>First Name</span>
                Dr. Kulsum
            </div>
            <div>
                <span>Speciality</span>
                General Physician
            </div>
            <div>
                <span>Last Name</span>
                Khan
            </div>
            <div>
                <span>License Number</span>
                74547
            </div>
            <div>
                <span>Gender</span>
                Female
            </div>
            <div>
                <span>Doctor Signature</span>
                -
            </div>
            <div>
                <span>Date Of Birth</span>
                1 May 1996
            </div>
            <div>
                <span>Education</span>
                BHMS
            </div>
            <div>
                <span>Experience</span>
                3 Years
            </div>
        </div>
    </div>

    <div class="general_info_section">
        <p>Contact Details</p>
        <div class="info-grid">
            <div>
                <span>Phone Number</span>
                8591103137
            </div>
            <div>
                <span>City</span>
                Mira Road
            </div>
            <div>
                <span>Email</span>
                khandrkulsoom.960501@gmail.com
            </div>
            <div>
                <span>State</span>
                Maharashtra
            </div>
            <div>
                <span>Address</span>
                Mira Road
            </div>
            <div>
                <span>Country</span>
                India
            </div>
            <div>
                <span>Street</span>
                Mira Road
            </div>
            <div>
                <span>Pincode</span>
                401107
            </div>
        </div>
    </div>

    <div class="general_info_section">
        <p>About Me</p>
        <p id='general_info_p_tage'>Dr. Kulsum Khan is a competent general physician with a Bachelor of Homeopathic Medicine and Surgery (B.H.M.S.) degree. With three years of experience in the healthcare field, she has honed her skills in diagnosing and managing a variety of health conditions. Dr. Khan is dedicated to providing holistic and patient-focused care, leveraging her homeopathic expertise to promote overall wellness and effective treatment solutions. Her commitment to patient care ensures that each individual receives attentive and personalized medical support.</p>
    </div>
</div>
  )
}

export default GeneralInfoPage
