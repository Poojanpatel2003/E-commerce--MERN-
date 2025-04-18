import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState={
    isAuthenticated:false,
    isLoading:false,
    user:null
}
export const registerUser = createAsyncThunk('auth/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
                withCredentials: true
            });
            return response.data;  // << This becomes payload
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        // eslint-disable-next-line no-unused-vars
        setUser:(state,action)=>{},
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading=true
        }).addCase(registerUser.fulfilled,(state)=>{
            state.isLoading=false;
            state.user=null;
            state.isAuthenticated=false
        }).addCase(registerUser.rejected,(state)=>{
            state.isLoading=false;
            state.user=null;;
            state.isAuthenticated=false
        })
    }
})  
export const {setUser}= authSlice.actions
export default authSlice.reducer;