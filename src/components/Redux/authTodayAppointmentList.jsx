import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    todaysAppointmentList:null,
    pastAppointmentList:null,
    upcomingAppointmentList:null,
    cancelledAppointmentList:null,
    token:localStorage.getItem('token') || null,
    error:"",
    loading:false,
}

export const fetchTodaysAppointmentList=createAsyncThunk("todaysAppointmentList",async(_,{rejectWithValue})=>{
try {
    const token=localStorage.getItem('adminToken');
    const response=await axios.get("http://api.bharatteleclinic.co/admin/get_all_appointment/today",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    // console.log(response.data,"todays patient list response.data",response.data)
    return response.data;
} catch (error) {
         // Handle errors by returning a rejected value
         console.error("API error while fetching the patient list",error.response)
         return rejectWithValue({
           status: error.response?.status,
           message: error.response?.data?.message
         })
}
})


// UPCOMING
export const fetchUpcomingAppointmentList=createAsyncThunk("upcomingAppointmentList",async(_,{rejectWithValue})=>{
    try {
        const token=localStorage.getItem('adminToken');
        const response=await axios.get("http://api.bharatteleclinic.co/admin/get_all_appointment/upcoming",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return response.data;
    } catch (error) {
             // Handle errors by returning a rejected value
             console.error("API error while fetching the patient list",error.response)
             return rejectWithValue({
               status: error.response?.status,
               message: error.response?.data?.message
             })
    }
    })

    // PAST
export const fetchPastAppointmentList=createAsyncThunk("pastAppointmentList",async(_,{rejectWithValue})=>{
    try {
        const token=localStorage.getItem('adminToken');
        const response=await axios.get("http://api.bharatteleclinic.co/admin/get_all_appointment/past",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return response.data;
    } catch (error) {
             // Handle errors by returning a rejected value
             console.error("API error while fetching the patient list",error.response)
             return rejectWithValue({
               status: error.response?.status,
               message: error.response?.data?.message
             })
    }
    })




        // Cancelled
export const fetchCancelledPastAppoList=createAsyncThunk("pastAppointmentList",async(_,{rejectWithValue})=>{
    try {
        const token=localStorage.getItem('adminToken');
        const response=await axios.get("http://api.bharatteleclinic.co/admin/get_all_appointment/canceled",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return response.data;
    } catch (error) {
             // Handle errors by returning a rejected value
             console.error("API error while fetching the patient list",error.response)
             return rejectWithValue({
               status: error.response?.status,
               message: error.response?.data?.message
             })
    }
    })
const authTodaysAppointmentList=createSlice({
    name:"todaysAppointmentList",
    initialState,
    reducers:{
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodaysAppointmentList.pending,(state)=>{
            state.loading=true,
            state.error=null;
        })
    
        .addCase(fetchTodaysAppointmentList.fulfilled, (state, action) => {
            state.loading = false;
            state.todaysAppointmentList = action.payload;
            state.error = null
          })
          .addCase(fetchTodaysAppointmentList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })


// FOR UPCOMING
          builder
          .addCase(fetchUpcomingAppointmentList.pending,(state)=>{
              state.loading=true,
              state.error=null;
          })
      
          .addCase(fetchUpcomingAppointmentList.fulfilled, (state, action) => {
              state.loading = false;
              state.upcomingAppointmentList = action.payload;
              state.error = null
            })
            .addCase(fetchUpcomingAppointmentList.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload;
            })

            // FOR PAST
          builder
          .addCase(fetchPastAppointmentList.pending,(state)=>{
              state.loading=true,
              state.error=null;
          })
      
          .addCase(fetchPastAppointmentList.fulfilled, (state, action) => {
              state.loading = false;
              state.pastAppointmentList = action.payload;
              state.error = null
            })
            .addCase(fetchPastAppointmentList.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload;
            })

               // FOR CANCELLED
          builder
          .addCase(fetchCancelledPastAppoList.pending,(state)=>{
              state.loading=true,
              state.error=null;
          })
      
          .addCase(fetchCancelledPastAppoList.fulfilled, (state, action) => {
              state.loading = false;
              state.cancelledAppointmentList = action.payload;
              state.error = null
            })
            .addCase(fetchCancelledPastAppoList.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload;
            })
    }
})

export default authTodaysAppointmentList.reducer;