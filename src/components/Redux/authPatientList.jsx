import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState={
    patient_list:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const fetchPatientList = createAsyncThunk("Admin/Patient_List",async (_,{rejectWithValue}) => {
    try {
      const token=localStorage.getItem('adminToken');
      const response = await axios.get("http://192.168.0.113:5000/admin/patient/get_all_patients",
        {
            headers:{
                 Authorization:`Bearer ${token}`
            }
        }
      )
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);


 const authPatientList=createSlice({
    name:"PatientList",
    initialState,
    reducers:{
    },

         // Login admin extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(fetchPatientList.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(fetchPatientList.fulfilled, (state, action) => {
       state.loading = false;
       state.patient_list = action.payload;
       state.error=null;
     })
     .addCase(fetchPatientList.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authPatientList.reducer;