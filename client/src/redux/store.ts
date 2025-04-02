import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { carsReducer } from "./slices/carsSlice";
import { searchReducer } from "./slices/searchSlice";
import { onSelectReducer } from "./slices/onSelectSlice";
import { favoriteReducer } from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cars: carsReducer,
    onSelect: onSelectReducer,
    favoriteCars: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
