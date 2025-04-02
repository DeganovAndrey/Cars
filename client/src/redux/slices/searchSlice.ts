import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../graphql/generated";

type initialStateProps = {
  search: string;
  searchedCars: Car[];
};

export const initialState: initialStateProps = {
  search: "",
  searchedCars: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    clearSearch: () => initialState,
    setSearchedCars(state, action: PayloadAction<Car[]>) {
      state.searchedCars = action.payload;
    },
  },
});

export const { setSearch, clearSearch, setSearchedCars } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
