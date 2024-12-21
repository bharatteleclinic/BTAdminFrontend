import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={
    user:"",
    token:localStorage.getItem('adminToken') || null,
    error:"",
    loading:false,
  };


export const loginAdmin = createAsyncThunk(
  "Admin/login",
  async (credencials,{rejectWithValue}) => {
    try {
      // Submitted form data is required in object form so formData storing object form.
      const formData = new FormData();
      Object.keys(credencials).forEach((key) => {
        formData.append(key, credencials[key]);
      });
      const response = await axios.post(
        "http://api.bharatteleclinic.co/user/login",
        formData
      );
      console.log("response-----",response);
      console.log("response.data----",response.data)
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);


 const authLogin=createSlice({
    name:"adminLogin",
    initialState,
    reducers:{
    },

         // Login admin extra reducers
      extraReducers:(builder)=>{
     builder
     .addCase(loginAdmin.pending, (state) => {
       state.loading = true;
       state.error=null;
     })
     .addCase(loginAdmin.fulfilled, (state, action) => {
       state.loading = false;
       state.user = action.payload;
       state.error=null;
     })
     .addCase(loginAdmin.rejected, (state, action) => {
       state.loading = false;
       state.error=action.payload;
     });
}}
 
)


export default authLogin.reducer;