import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const favsInLS = localStorage.getItem("miniStoreFavs")
  ? JSON.parse(localStorage.getItem("miniStoreFavs"))
  : [];

const favInLocalStorage = (data) => {
  localStorage.setItem("miniStoreFavs", JSON.stringify(data));
};
const initialState = { favsNums: favsInLS, favourites: [] };

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const { userId, proId } = action.payload;
      const user = state.favsNums.find((user) => user.userId === userId);

      if (user) {
        const isProductInFav = user.favourite.includes(proId);
        if (isProductInFav) {
          user.favourite = user.favourite.filter((id) => id !== proId);
        } else {
          user.favourite.push(proId);
        }
      } else {
        state.favsNums.push({ userId, favourite: [proId] });
      }
      favInLocalStorage(state.favsNums);
    },

    getFav: (state, action) => {
      const userId = action.payload;
      const user = state.favsNums.find((user) => user.userId === userId);

      if (user) {
        state.favourites = data.products.filter((product) =>
          user.favourite.includes(product.id)
        );
      }
    },

    clearFav: (state) => {
      state.favsNums = [];
      state.favourites = [];
      favInLocalStorage(state.favsNums);
    },

    cleanFavs: (state) => {
      state.favourites = [];
    },
  },
});

export const { getFav, addToFav, clearFav, cleanFavs } = favouriteSlice.actions;
export default favouriteSlice.reducer;
