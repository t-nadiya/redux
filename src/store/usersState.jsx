import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { io } from "socket.io-client";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  // const response = await fetch("https://randomuser.me/api/?results=10");
  // const data = await response.json();
  // return data.results;

  return fetch("https://randomuser.me/api/?results=50").then((response) =>
    response.json()
  );
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selected: [],
  },
  reducers: {
    handleUser: (state, action) => {
      const data = action.payload;
      console.log(data);
      data.status
        ? state.selected.push(data.user)
        : state.selected = state.selected.filter(
            (item) => item.login.uuid !== data.user.login.uuid
          );
    },
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload.results;
    },
  },
});
export const { setData, handleUser } = usersSlice.actions;

export default usersSlice.reducer;
