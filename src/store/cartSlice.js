import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const miniStoreCartLS = localStorage.getItem("miniStoreCartLS")
  ? JSON.parse(localStorage.getItem("miniStoreCartLS"))
  : [];

const storeInLocalStorage = (data) => {
  localStorage.setItem("miniStoreCartLS", JSON.stringify(data));
};

const initialState = {
  cartNums: miniStoreCartLS,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { userId, proId } = action.payload;
      const userCart = state.cartNums.find((user) => user.userId === userId);

      if (userCart) {
        const product = userCart.cart.find((item) => item.productId === proId);
        if (product) {
          product.quantity++;
        } else {
          userCart.cart.push({ productId: proId, quantity: 1 });
        }
      } else {
        state.cartNums.push({
          userId,
          cart: [{ productId: proId, quantity: 1 }],
        });
      }
      storeInLocalStorage(state.cartNums);
    },

    getCart: (state, action) => {
      const userId = action.payload;
      const userCart = state.cartNums.find((user) => user.userId === userId);

      if (userCart) {
        const userProductIds = userCart.cart.map((item) => item.productId);
        state.cart = data.products
          .filter((product) => userProductIds.includes(product.id))
          .map((product) => ({
            ...product,
            quantity: userCart.cart.find(
              (item) => item.productId === product.id
            ).quantity,
          }));
      }
    },

    decreaseQuantity: (state, action) => {
      const { userId, proId } = action.payload;
      const userCart = state.cartNums.find((user) => user.userId === userId);

      if (userCart) {
        const product = userCart.cart.find((item) => item.productId === proId);

        if (product) {
          if (product.quantity > 1) {
            product.quantity--;
          } else {
            userCart.cart = userCart.cart.filter(
              (item) => item.productId !== proId
            );
            state.cart = state.cart.filter((product) => product.id !== proId);
          }
        }
      }
      storeInLocalStorage(state.cartNums);
    },

    removeFromCart: (state, action) => {
      const { userId, proId } = action.payload;
      const userCart = state.cartNums.find((user) => user.userId === userId);

      if (userCart) {
        userCart.cart = userCart.cart.filter(
          (item) => item.productId !== proId
        );
        state.cart = state.cart.filter((product) => product.id !== proId);
      }
      storeInLocalStorage(state.cartNums);
    },

    clearCart: (state) => {
      state.cartNums = [];
      state.cart = [];
      storeInLocalStorage(state.cartNums);
    },

    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  getCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  cleanCart,
} = cartSlice.actions;
export default cartSlice.reducer;
