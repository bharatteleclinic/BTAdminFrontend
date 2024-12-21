import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={
    doctor_list:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const fetchDoctorList = createAsyncThunk("Admin/Doctor_List",async (_,{rejectWithValue}) => {
    try {
      const token=localStorage.getItem('adminToken');
      const response = await axios.get("http://192.168.0.113:5000/admin/doctor/get_all_doctors",
        {
            headers:{
                 Authorization:`Bearer ${token}`
            }
        }
      );
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);


 const authDoctortList=createSlice({
    name:"DoctorList",
    initialState,
    reducers:{
    },

         // Login admin extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(fetchDoctorList.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(fetchDoctorList.fulfilled, (state, action) => {
       state.loading = false;
       state.doctor_list = action.payload;
       state.error=null;
     })
     .addCase(fetchDoctorList.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authDoctortList.reducer;