import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subs: [],
    isLoading: false,
    error: false
}

const subRedditSlice = createSlice({
    name: "subReddit",
    initialState: initialState,
    reducers: {
        getSubsPending(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubsError(state) {
            state.isLoading = false,
            state.error = true
        },
        getSubsSuccess(state, action) {
            state.isLoading = false;
            state.error = false;
            state.subs = action.payload;
        }
    }
})

export const {
    getSubsPending,
    getSubsError,
    getSubsSuccess
} = subRedditSlice.actions;

export default subRedditSlice.reducer;