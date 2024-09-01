import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = { relatedProducts: []};

const relatedProductsSlice = createSlice({
  name: "relatedProducts",
  initialState,
  reducers: {
    getRelatedProducts: (state, action) => {
      const filterProducts = data.products.filter(
        (pro) =>
          pro.catPrefix === action.payload.catPrefix &&
          pro.id !== action.payload.id
      );

      state.relatedProducts = filterProducts;
    },
    cleanRelatedProducts: (state) => {
      state.relatedProducts = [];
    },
  },
});

export const { getRelatedProducts, cleanRelatedProducts } =
  relatedProductsSlice.actions;
export default relatedProductsSlice.reducer;
