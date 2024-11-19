import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage for persistence
import authReducer from "./authSlice";
import moviesReducer from "./movieSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use persisted reducer for auth
    movies: moviesReducer,
  },
});

export const persistor = persistStore(store);
export default store;
