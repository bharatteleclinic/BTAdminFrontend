import { configureStore } from "@reduxjs/toolkit";
import pharmaReducer from '../store/slices/pharmaSlice'
import patientReducer from '../store/slices/patientSlice'
import doctorReducer from '../store/slices/doctorSlice'
export const store =configureStore({
reducer:{
    doctors:doctorReducer,
    pharma:pharmaReducer,
    patient:patientReducer
}
})