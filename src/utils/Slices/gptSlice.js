import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        checkView: false
    },
    reducers: {
        checkClickView: (state, action) => {
            state.checkView = !state.checkView;
        }
    }
})

export default gptSlice.reducer;
export const { checkClickView } = gptSlice.actions;