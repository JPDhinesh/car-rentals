import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  startDate: "",
  returnDate: "",
  searchResult: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setReturnDate(state, action) {
      state.returnDate = action.payload;
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
