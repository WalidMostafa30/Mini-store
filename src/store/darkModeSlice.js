import { createSlice } from "@reduxjs/toolkit";

const shopDarkMode = JSON.parse(localStorage.getItem("shopDarkMode")) || false;

const darkInLocalStorage = (data) => {
  localStorage.setItem("shopDarkMode", data);
};

export const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState: shopDarkMode,
  reducers: {
    toggleDarkMode: (state) => {
      state = !state;
      darkInLocalStorage(state);
      return state;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
