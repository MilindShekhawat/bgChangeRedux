//1. Import createSlice
import { createSlice } from "@reduxjs/toolkit";

//2. Set an initialState
const initialState = {
    bg: '#abcdef'
}

//3. Create a slice using createSlice
export const bgSlice = createSlice({
    //4. Give name and initialState to start with.
    name: 'lightBlue',
    initialState,

    //5. Define reducers
    reducers: {
        //6. Create a reducer
        bgChange: (state, action) => {
            state.bg = action.payload
        }
    }
});

//7. Export Each reducer 
export const {bgChange} = bgSlice.actions

//8. Export the slice
export default bgSlice.reducer