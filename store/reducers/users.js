import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    saveUserState(state, { payload }) {
      state.user = payload.user;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
