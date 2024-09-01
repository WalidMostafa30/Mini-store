import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = {
  bestRate: [],
  newProducts: [],
};

const filterProductsByprop = (condition) => {
  return data.products.filter(condition);
};

const filterProductsSlice = createSlice({
  name: "filterProducts",
  initialState,
  reducers: {
    getBestRate: (state) => {
      state.bestRate = filterProductsByprop(
        (product) => product.rate === "good"
      );
    },
    getNewProducts: (state) => {
      state.newProducts = filterProductsByprop((product) => product.new);
    },
    cleanBestRate: (state) => {
      state.bestRate = [];
    },
    cleanNewProducts: (state) => {
      state.newProducts = [];
    },
  },
});

export const { getBestRate, getNewProducts, cleanBestRate, cleanNewProducts } =
  filterProductsSlice.actions;
export default filterProductsSlice.reducer;
