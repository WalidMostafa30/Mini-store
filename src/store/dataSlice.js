import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../assets/data/Data";

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: Data,
  reducers: {},
});

export default dataSlice.reducer;
