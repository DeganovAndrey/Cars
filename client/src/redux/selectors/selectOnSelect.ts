import { RootState } from "../store";

export const selectSelectedCars = (state: RootState) =>
  state.onSelect.selectedCars;
