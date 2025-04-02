import { RootState } from "../store";

export const selectCars = (state: RootState) => state.cars.list;
export const selectCarsLoading = (state: RootState) => state.cars.loading;
export const selectCarsError = (state: RootState) => state.cars.error;
