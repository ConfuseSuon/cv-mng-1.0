import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    closeSideBar: false,
}

const sharedSlice = createSlice({
    name: 'sharedFeatures',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.closeSideBar = !state.closeSideBar
        },
    }
})



export const { toggleSideBar } = sharedSlice.actions
export default sharedSlice.reducer