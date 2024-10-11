import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const fetchPatient=createAsyncThunk('patient/fetchPatient',async()=>{
     const response=await fetch('/api/patients')
     return response.json();
})
const initialState = {
    patients: [],
    status: "idle",
    error: null
}
const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        deactivatePatient: (state, action) => {
            const patient = state.patients.find(pat => pat.id === action.payload)
            if (patient) patient.status = "Deactivated"
        },
        updatePatient:(state,action)=>{
            const patient=state.patients.find(pat=>pat.id===action.payload.id);
            if(patient){
                Object.assign(patient,action.payload)
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPatient.pending,(state)=>{
            state.status="Loading";
        })
        builder.addCase(fetchPatient.fulfilled,async(state,action)=>{
            state.status="Succeeded";
            state.patients=action.payload;
        })
        builder.addCase(fetchPatient.rejected,async (state)=>{
            state.status="Failed";
            state.error=action.error.message;
        })
    }
})
export const {deactivatePatient,updatePatient}=patientSlice.actions;
export default patientSlice.reducer;