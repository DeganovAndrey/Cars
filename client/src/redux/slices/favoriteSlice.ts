import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../graphql/generated";

interface FavoriteProps extends Car {}

interface InitialStateProps {
  favoriteCars: FavoriteProps[];
}

const initialState: InitialStateProps = {
  favoriteCars: [],
};

const favoriteSlice = createSlice({
  name: "favoriteCars",
  initialState,
  reducers: {
    addFavoriteCars(state, action: PayloadAction<FavoriteProps>) {
      const existingCar = state.favoriteCars.find(
        (car) => car.id === action.payload.id
      );
      if (!existingCar) {
        state.favoriteCars.push(action.payload);
      }
    },
    deleteFavoriteCars(state, action: PayloadAction<number>) {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addFavoriteCars, deleteFavoriteCars } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
