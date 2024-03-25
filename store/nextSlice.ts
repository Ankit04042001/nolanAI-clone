import { createSlice } from "@reduxjs/toolkit";

interface NextState{
    userInfo: null | string,
}

const initialState:NextState = {
    userInfo: null
}

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        addUser: (state, action)=>{
            state.userInfo = action.payload;
        },

        removeUser: (state)=>{
            state.userInfo = null;
        }
        
    }
})

export const {addUser, removeUser} = nextSlice.actions; 

export default nextSlice.reducer;