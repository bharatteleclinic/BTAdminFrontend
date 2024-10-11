import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const response = await fetch('/api/doctors');
  return response.json();
});
const initialState = {
  doctors: [],
  status: "idle",
  error: null,
};
const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    approveDoctor: (state, actions) => {
      const doctor = state.doctors.find((doc) => doc.id === actions.payload);
      if (doctor) doctor.status = "Approved";
    },
    rejectDoctor: (state, actions) => {
      const doctor = state.doctors.find((doc) => doc.id === actions.payload);
      if (doctor) doctor.status = "Rejected";
    },
    deactivateDoctor: (state, actions) => {
      const doctor = state.doctors.find((doc) => doc.id === actions.payload);
      if (doctor) doctor.status = "Deactivated";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending,(state)=>{
      state.status="loading"
    });
    builder.addCase(fetchDoctors.fulfilled,(state,actions)=>{
      state.status="scucceeded"
      state.doctors=actions.payload;
    })
    builder.addCase(fetchDoctors.rejected,(state,actions)=>{
      state.status="failed";
      state.error=actions.error.message;
    })
  }
});

export const { approveDoctor, rejectDoctor, deactivateDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;