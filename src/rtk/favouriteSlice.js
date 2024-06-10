import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("miniStoreFav")
  ? JSON.parse(localStorage.getItem("miniStoreFav"))
  : [];

const favInLocalStorage = (data) => {
  localStorage.setItem("miniStoreFav", JSON.stringify(data));
};

export const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        state = state.filter((item) => item.id !== action.payload.id);
        return state;
      } else {
        state.push(action.payload);
      }
      favInLocalStorage(state);
    },

    removeFromFav: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      favInLocalStorage(state);
      return state;
    },

    clearFav: (state) => {
      state = [];
      favInLocalStorage(state);
      return state;
    },
  },
});

export const { addToFav, removeFromFav, clearFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
