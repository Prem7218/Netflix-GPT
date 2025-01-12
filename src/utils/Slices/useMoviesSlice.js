import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowVideoTrailer: null,
        nowNextVideoTrailerList: [],
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
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

export const { addNowPlayingMovies, addTrailerVideo, addNextClickViewIndex, removeSelectIndex } = moviesSlice.actions;
export default moviesSlice.reducer; 