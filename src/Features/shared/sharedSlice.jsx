import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    closeSideBar: false,
    searchQuery: '',
}

const sharedSlice = createSlice({
    name: 'sharedFeatures',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.closeSideBar = !state.closeSideBar
        },
        searchTerm: (state, { payload }) => {
            state.searchQuery = payload
            console.log(state.searchQuery)
        }
    }
})



export const { toggleSideBar, searchTerm } = sharedSlice.actions
export default sharedSlice.reducer