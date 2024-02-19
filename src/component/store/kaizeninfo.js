import { createSlice } from "@reduxjs/toolkit";

const kaizenSlice = createSlice({
  name: "kaizeninfo",
  initialState: { login: {} },
  reducers: {},
});


export const kaizenActions= kaizenSlice.actions;
export default kaizenSlice;