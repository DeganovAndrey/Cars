import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Query } from "../../graphql/generated";
import { Status } from "../../types";

export const loadedCars = createAsyncThunk<
  Query["cars"],
  void,
  { rejectValue: string }
>("cars/loadedCars", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:4000/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `
              query {
                cars {
                  id
                  brand
                  model
                  color
                  model_year
                  img_src
                  price
                  description
                  availability
                }
              }
            `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, text: ${errorText}`
      );
    }

    const jsonData = await response.json();
    const data = jsonData.data.cars;

    return data;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue("unknown");
  }
});

type CarsSlice = {
  list: Query["cars"];
  status: Status;
  error: string | null;
  loading: boolean;
};

const initialState: CarsSlice = {
  list: [],
  status: "idle",
  error: null,
  loading: false,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadedCars.pending, (state) => {
        state.loading = true;
        state.status === "loading";
        state.error = null;
      })
      .addCase(loadedCars.rejected, (state, action) => {
        state.loading = false;
        state.status === "rejected";
        state.error = action.error.message || "Cannot load cars";
      })
      .addCase(loadedCars.fulfilled, (state, action) => {
        state.loading = false;
        state.status === "received";
        state.list = action.payload;
        state.error = null;
      });
  },
});

export const {} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
