import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: {},
  },
  reducers: {
    saveUserState(state, { payload }) {
      state.items = payload.items;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
