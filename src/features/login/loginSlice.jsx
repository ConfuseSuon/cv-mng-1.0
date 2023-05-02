import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    profile: '',
    access_id: '',
    isLogged: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{

    }
})

export default loginSlice.reducer;