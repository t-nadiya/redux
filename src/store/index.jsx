import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersState";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;