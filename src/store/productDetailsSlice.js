import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = { productDetails: {} };

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProductDetails: (state, action) => {
      const productId = action.payload;
      const product = data.products.find((pro) => pro.id == productId);

      state.productDetails = product;
    },

    cleanproductDetails: (state) => {
      state.productDetails = initialState.productDetails;
    },
  },
});

export const { getProductDetails, cleanproductDetails } =
  productDetailsSlice.actions;
export default productDetailsSlice.reducer;
