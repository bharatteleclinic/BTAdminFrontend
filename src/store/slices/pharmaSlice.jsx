import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const fetchPharmacists=createAsyncThunk('pharmacist/fetchPharmacist',async()=>{
    const response=await fetch('api/pharmacist')
    return response.json()
})
const initialState={
    pharmacists:[],
    status:'idle',
    error:null
}
const pharmaSlice=createSlice({
    name:"pharmacists",
    initialState,
    reducers:{
        approvePharmacist:(state,action)=>{
            const pharmacist=state.pharmacists.find(pharma=>pharma.id===action.payload)
            if(pharmacist) state.status="Approved";
        },
        deactivatePharmacist:(state,action)=>{
            const pharmacist=state.pharmacists.find(pharma=>pharma.id===action.payload)
            if(pharmacist) state.status="Deactivated"
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPharmacists.fulfilled,(state,)=>{
            state.status="Succeeded";
        })
        builder.addCase(fetchPharmacists.pending,(state)=>{
            state.status="Loading"
        })
        builder.addCase(fetchPharmacists.rejected,(state)=>{
            state.status="Failed"
        })
    }
})
export const {approvePharmacist,deactivatePharmacist}=pharmaSlice.actions;
export default pharmaSlice.reducer;