import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import darkModeSlice from "./darkModeSlice";
import favouriteSlice from "./favouriteSlice";
import colorSlice from "./colorSlice";
import showModalsSlice from "./showModalsSlice";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import filterProductsSlice from "./filterProductsSlice";
import searchSlice from "./searchSlice";
import productDetailsSlice from "./productDetailsSlice";
import relatedProductsSlice from "./relatedProductsSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    dark: darkModeSlice,
    favourite: favouriteSlice,
    color: colorSlice,
    modals: showModalsSlice,
    categories: categoriesSlice,
    products: productsSlice,
    filterProducts: filterProductsSlice,
    search: searchSlice,
    productDetails: productDetailsSlice,
    relatedProducts: relatedProductsSlice,
    auth: authSlice,
  },
});
