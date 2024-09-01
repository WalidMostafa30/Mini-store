import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = { products: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      const prefix = action.payload;

      state.products = data.products.filter((pro) => pro.catPrefix === prefix);
    },
    cleanProducts: (state) => {
      state.products = initialState.products;
    },
  },
});

export const { getProducts, cleanProducts } = productsSlice.actions;
export default productsSlice.reducer;
