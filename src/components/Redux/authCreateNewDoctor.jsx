import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


let initialState={
    newDoctor:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const fetchToCreateNewDoctor = createAsyncThunk("Admin/New_Doctor",async (credencials,{rejectWithValue}) => {
    try {
     
        console.log("before api convertion ----data came---",credencials)
           // Submitted form data is required in object form so formData storing object form.
      const formData = new FormData();
      Object.keys(credencials).forEach((key) => {
        formData.append(key, credencials[key]);
      });
      console.log("after api convertion ----formData---",formData)
      const token=localStorage.getItem('adminToken');
      const response = await axios.post(`http://192.168.0.113:5000/admin/doctor/admin_create_doctor`,formData,
        {
            headers:{
                Authorization:`Bearer ${token}`
           }
        }
      )
      return response;
    } catch (error) {
        console.log(error.response,"error after api hit")
        console.log(error.response.data,"error after api hit")
      return error.response.data;
    }
  }
);


 const authCreateNewDoctor=createSlice({
    name:"newDoctor",
    initialState,
    reducers:{
    },

         // Create new doctor extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(fetchToCreateNewDoctor.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(fetchToCreateNewDoctor.fulfilled, (state, action) => {
       state.loading = false;
       state.newDoctor = action.payload;
       state.error=null;
     })
     .addCase(fetchToCreateNewDoctor.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authCreateNewDoctor.reducer;