import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profile: "",
  access_token: "",
  isLogged: localStorage.getItem("key"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailPassword: (state, action) => {
      const { email, name, access_token, picture } = action.payload;
      const userCredential = { email, name, access_token, picture };
      localStorage.setItem("key", JSON.stringify(userCredential));
      state.isLogged = true;
    },
    logoutFunc: (state, action) => {
      localStorage.clear("key");
      window.location.reload(true);
    },
  },
});

export const { setEmailPassword, logoutFunc } = authSlice.actions;

export default authSlice.reducer;
