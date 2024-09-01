import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("miniStoreColor")
  ? localStorage.getItem("miniStoreColor")
  : "#028dc9";

const colorInLocalStorage = (data) => {
  localStorage.setItem("miniStoreColor", data);
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action) => {
      const newColor = action.payload;
      colorInLocalStorage(newColor);
      return newColor;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
