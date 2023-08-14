import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userDetails: null,
  tokens: null,
  storeIds: null,
};
export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setToken: (state, action) => {
      state.tokens = action.payload;
    },
    setStoreIds: (state, action) => {
      state.storeIds = action.payload;
    },
    handleLogout: () => {},
  },
});
export const {
  setToken,
  toggleLoading,
  setUserDetails,
  setStoreIds,
  handleLogout,
} = AuthSlice.actions;

export default AuthSlice.reducer;
