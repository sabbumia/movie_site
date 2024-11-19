import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("http://localhost:3000/movielist/show");
  return response.data.data; // Assuming the API returns a `data` field with movies
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    filteredMovies: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterMovies(state, action) {
      state.filteredMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.filteredMovies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch movies";
      });
  },
});

export const { filterMovies } = movieSlice.actions;
export default movieSlice.reducer;
