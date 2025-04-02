import { RootState } from "../store";

export const selectSearch = (state: RootState) => state.search.search;
export const selectSearchedCars = (state: RootState) =>
  state.search.searchedCars;
