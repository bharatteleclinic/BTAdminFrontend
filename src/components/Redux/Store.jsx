import { configureStore } from "@reduxjs/toolkit";
import authLogin from "./authLogin"
import authPatientList from "./authPatientList"
import authDoctorList from "./authDoctorList"
import authIndivisualPateint from "./authIndivisualPatient"
import authCreateNewPatient from "./authCreateNewPatient";
import fetchToCreateNewDoctor from "./authCreateNewDoctor"
import todayAppointmentList from "./authTodayAppointmentList"
const store=configureStore({

    reducer:{
        login:authLogin,
        patientList:authPatientList,
        doctorList:authDoctorList,
        singlePatient:authIndivisualPateint,
        newPatient:authCreateNewPatient,
        newDoctor:fetchToCreateNewDoctor,
        todayAppointmentList:todayAppointmentList
    }
  
})

export default store;