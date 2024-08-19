// showModalsSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = { sideCart: false, nav: false, search: false };

export const showModalsSlice = createSlice({
  name: "showModals",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.nav = !state.nav;
    },
    toggleSideCart: (state) => {
      state.sideCart = !state.sideCart;
    },
    toggleSearch: (state) => {
      state.search = !state.search;
    },
  },
});

export const { toggleNav, toggleSideCart, toggleSearch } =
  showModalsSlice.actions;
export default showModalsSlice.reducer;
