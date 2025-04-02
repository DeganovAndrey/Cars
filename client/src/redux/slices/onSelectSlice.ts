import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../graphql/generated";

interface CarState extends Car {}

interface InitialStateProps {
  selectedCars: CarState[];
}

const initialState: InitialStateProps = {
  selectedCars: [],
};

const onSelectSlice = createSlice({
  name: "onSelect",
  initialState,
  reducers: {
    setSelectedCars: (state, action: PayloadAction<CarState[]>) => {
      state.selectedCars = action.payload;
    },
  },
});

export const { setSelectedCars } = onSelectSlice.actions;
export const onSelectReducer = onSelectSlice.reducer;
