import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("miniStoreColor")
  ? localStorage.getItem("miniStoreColor")
  : "#028dc9";

const colorInLocalStorage = (data) => {
  localStorage.setItem("miniStoreColor", data);
};

export const colorSlice = createSlice({
  name: "colorSlice",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state = action.payload;
      colorInLocalStorage(state);
      return state;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
