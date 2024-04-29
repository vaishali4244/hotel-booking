import { createSlice } from "@reduxjs/toolkit";

// Initial states constructed
const initialState = {
  user: {
    name: "",
    phone: "",
    email: "",
    password: "",
    agency: "",
    companyName: "",
  },
  token: "",
};

export const userDetail = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.user = {
        ...state.user,
        email: "",
        password: "",
      };
    },
  },
});

export const { setUserData, setToken, setLogout } = userDetail.actions;
export default userDetail.reducer;
