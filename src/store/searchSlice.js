import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const initialState = { searchData: [], msg: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      const { selectedOption, title } = action.payload;

      if (title.trim().length !== 0) {
        const filterSearch = data[selectedOption].filter((data) =>
          data.title.toUpperCase().includes(title.trim().toUpperCase())
        );

        if (filterSearch.length > 0) {
          state.searchData = filterSearch;
        } else {
          state.msg = "Not found";
        }
      } else {
        state.msg = "";
        state.searchData = [];
      }
    },
    cleanSearch: (state) => {
      state.searchData = [];
      state.msg = "";
    },
  },
});

export const { getSearch, cleanSearch } = searchSlice.actions;
export default searchSlice.reducer;
