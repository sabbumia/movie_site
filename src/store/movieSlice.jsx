// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk to fetch movies
// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//   const response = await axios.get("http://localhost:3000/movielist/show");
//   return response.data.data; // Assuming the API returns a `data` field with movies
// });

// const movieSlice = createSlice({
//   name: "movies",
//   initialState: {
//     movies: [],
//     filteredMovies: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     filterMovies(state, action) {
//       state.filteredMovies = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.movies = action.payload;
//         state.filteredMovies = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = "Failed to fetch movies";
//       });
//   },
// });

// export const { filterMovies } = movieSlice.actions;
// export default movieSlice.reducer;


// movieSlice.js (Redux slice)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
    const response = await axios.get("http://localhost:3000/movielist/show"); // Ensure this URL matches your API
    return response.data.data; // Make sure to return the movies data correctly
  } catch (error) {
    throw new Error(error.message);
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    filteredMovies: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterMovies: (state, action) => {
      state.filteredMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
        state.filteredMovies = action.payload; // Initially set filtered movies to all fetched movies
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterMovies } = movieSlice.actions;
export default movieSlice.reducer;
