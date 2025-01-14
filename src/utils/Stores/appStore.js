import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import moviesReducer from "../Slices/useMoviesSlice";
import gptReducer from "../Slices/gptSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
        },
    }
)

export default appStore;