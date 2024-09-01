import { createSlice } from "@reduxjs/toolkit";

const initialState = { nav: false, search: false };

export const showModalsSlice = createSlice({
  name: "showModals",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.nav = !state.nav;
    },
    toggleSearch: (state) => {
      state.search = !state.search;
    },
  },
});

export const { toggleNav, toggleSearch } = showModalsSlice.actions;
export default showModalsSlice.reducer;
