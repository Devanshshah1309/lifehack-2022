import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./reducers/items";
import userSlice from "./reducers/users";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    items: itemsSlice.reducer,
  },
});

export default store;
