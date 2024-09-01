import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.categories = data.categories;
    },
    cleanCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { getCategories, cleanCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
