import { createSlice } from "@reduxjs/toolkit";

const miniStoreCart = localStorage.getItem("miniStoreCart")
  ? JSON.parse(localStorage.getItem("miniStoreCart"))
  : [];

const storeInLocalStorage = (data) => {
  localStorage.setItem("miniStoreCart", JSON.stringify(data));
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: miniStoreCart,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity++;
      } else {
        const productclone = { ...action.payload, quantity: 1 };
        state.push(productclone);
      }
      storeInLocalStorage(state);
    },

    decressquantity: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        if (findProduct.quantity > 1) {
          findProduct.quantity--;
        } else {
          state = state.filter((item) => item.id !== action.payload.id);
          storeInLocalStorage(state);
          return state;
        }
      }
      storeInLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      storeInLocalStorage(state);
      return state;
    },

    clearCart: (state) => {
      state = [];
      storeInLocalStorage(state);
      return state;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decressquantity } =
  cartSlice.actions;
export default cartSlice.reducer;
