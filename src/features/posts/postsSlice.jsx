import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "It's hard learning new things",
  },
  {
    id: "2",
    title: "Slices...",
    content: "When I hear Slices, I think of pizza!",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
