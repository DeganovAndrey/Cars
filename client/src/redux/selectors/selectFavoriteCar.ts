import { RootState } from "../store";

export const selectFavoriteCar = (state: RootState) =>
  state.favoriteCars.favoriteCars;
