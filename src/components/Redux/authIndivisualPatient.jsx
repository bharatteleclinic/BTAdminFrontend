import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState={
    singlePatientDetail:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const fetchIndivisualPatient = createAsyncThunk("Admin/single_Patient_Detail",async (id,{rejectWithValue}) => {
    try {
      const token=localStorage.getItem('adminToken');
      const response = await axios.get(`http://192.168.0.113:5000/admin/patient/get_patient_by_id?id=${id}`,
        {
            headers:{
                 Authorization:`Bearer ${token}`
            }
        }
      )
      return response;
    } catch (error) {
        console.log(error.response)
        console.log(error.response.data)
     
      return error.response.data;
    }
  }
);


 const authIndivusualPatient=createSlice({
    name:"singlePatientDetail",
    initialState,
    reducers:{
    },

         // Login admin extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(fetchIndivisualPatient.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(fetchIndivisualPatient.fulfilled, (state, action) => {
       state.loading = false;
       state.singlePatientDetail = action.payload;
       state.error=null;
     })
     .addCase(fetchIndivisualPatient.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authIndivusualPatient.reducer;