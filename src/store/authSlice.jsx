import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  isAuthenticated: false, // Default is not authenticated
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userId = action.payload.userId;
      state.isAuthenticated = true; // Mark user as authenticated
        // Set a timeout for automatic logout (e.g., 1 hour)
    setTimeout(() => {
    state.userId = null;
    state.isAuthenticated = false;
  }, 3600000); // 1 hour in milliseconds
    },
    logout: (state) => {
      state.userId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
