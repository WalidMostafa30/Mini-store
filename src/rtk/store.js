import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";
import darkModeSlice from "./darkModeSlice";
import favouriteSlice from "./favouriteSlice";
import colorSlice from "./colorSlice";

export const store = configureStore({
  reducer: {
    mainData: dataSlice,
    cart: cartSlice,
    dark: darkModeSlice,
    favourite: favouriteSlice,
    color: colorSlice
  },
});
