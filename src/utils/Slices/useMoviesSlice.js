import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingPopMovie: null,
        nowPlayingTopMovie: null,
        nowPlayingUpcMovie: null,
        nowVideoTrailer: null,
        nowNextVideoTrailerList: [],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopPlayingMovies: (state, action) => {
            state.nowPlayingPopMovie = action.payload;
        },
        addTopPlayingMovies: (state, action) => {
            state.nowPlayingTopMovie = action.payload;
        },
        addUpcPlayingMovies: (state, action) => {
            state.nowPlayingUpcMovie = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.nowVideoTrailer = action.payload;
        },
        addNextClickViewIndex: (state, action) => {
            const findindex = state.nowNextVideoTrailerList.findIndex((item) => item === action.payload);
            
            if(findindex === -1) {
                state.nowNextVideoTrailerList.push(action.payload); 
            }
        },
        removeSelectIndex: (state) => {
            // Example condition: remove the trailer after a specific count or condition
            if (state.nowNextVideoTrailerList.length > 0) {
                // Remove the first trailer if there are trailers in the list
                state.nowNextVideoTrailerList.shift(); 
            }
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addNextClickViewIndex, 
               removeSelectIndex  , addPopPlayingMovies, addTopPlayingMovies, addUpcPlayingMovies
             } = moviesSlice.actions;
export default moviesSlice.reducer; 