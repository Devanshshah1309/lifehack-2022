import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: {},
  },
  reducers: {
    saveItemsState(state, { payload }) {
      console.log(payload);
      state.items = payload.items;
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;
