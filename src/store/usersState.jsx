import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { io } from "socket.io-client";

export const getUsers = createAsyncThunk(
  "users/getUsers",
//   async (_, { dispatch }) => {
//     const socket = io.connect("http://localhost:4000");
//     socket.on("connect", () => socket.emit("start"));
//     socket.on("ticker", (data) => {
//       dispatch(setData(data.allTickers));
//       dispatch(displayCard(data.displayTickers));
//     });
//   }
async () => {
    const response = await fetch("https://randomuser.me/api/?results=80");
    const data = await response.json();
    console.log(data.results);
    return data.results;
}
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    filtered: []
  },
  reducers: {
    setData: (state, action) => {
        console.log(state.users);
        console.log(action.payload);
      state.filtered = state.users.filter((item) => console.log(item))
    },
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { setData } = usersSlice.actions;

export default usersSlice.reducer;
