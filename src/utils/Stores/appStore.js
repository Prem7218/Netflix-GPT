import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import moviesReducer from "../Slices/useMoviesSlice"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
        },
    }
)

export default appStore;