import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.result;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.isAuth = true;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
