import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState={
    newPatient:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const fetchToCreateNewPatient = createAsyncThunk("Admin/New_Patient",async (credencials,{rejectWithValue}) => {
    try {
        console.log("before api convertion ----data came---",credencials)
           // Submitted form data is required in object form so formData storing object form.
      const formData = new FormData();
      Object.keys(credencials).forEach((key) => {
        formData.append(key, credencials[key]);
      });
      console.log("after api convertion ----formData---",formData)
      const token=localStorage.getItem('adminToken');
      const response = await axios.post(`http://192.168.0.113:5000/admin/patient/admin_create_patient`,formData,
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


 const authCreateNewPatient=createSlice({
    name:"newPatient",
    initialState,
    reducers:{
    },

         // Login admin extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(fetchToCreateNewPatient.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(fetchToCreateNewPatient.fulfilled, (state, action) => {
       state.loading = false;
       state.newPatient = action.payload;
       state.error=null;
     })
     .addCase(fetchToCreateNewPatient.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authCreateNewPatient.reducer;