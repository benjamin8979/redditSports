import { createSlice } from "@reduxjs/toolkit";
import { subs } from '../../data/mockData';

const initialState = {
    subs: [],
    isLoading: false,
    error: false
}

const subRedditSlice = createSlice({
    name: "subreddit",
    initialState: initialState,
    reducers: {
        getSubsPending(state) {
            console.log("Pending");
            state.isLoading = true;
            state.error = false;
        },
        getSubsError(state) {
            console.log("Error");
            state.isLoading = false;
            state.error = true;
        },
        getSubsSuccess(state, action) {
            console.log("Success");
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


export const selectSubs = (state) => state.subreddit.subs;

export const fetchSubs = () => async (dispatch) => {
    try {
        dispatch(getSubsPending());
        const subReddits = await subs;
        dispatch(getSubsSuccess(subReddits));
    }
    catch (error) {
        dispatch(getSubsError());
    }
}