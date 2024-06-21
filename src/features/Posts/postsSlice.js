import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    subreddit: "r/Home",
    logo: "https://styles.redditmedia.com/t5_6/styles/communityIcon_a8uzjit9bwr21.png"
}

const postSlice = createSlice({
    name: "Post",
    initialState: initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        getPostsPending(state) {
            state.error = false;
            state.isLoading = true;
        },
        getPostsError(state) {
            state.error = true;
            state.isLoading = false;
        },
        getPostsSuccess(state, action) {
            state.error = false;
            state.isLoading = false,
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSubbredit(state, action) {
            state.subreddit = action.payload;
            state.searchTerm = '';
        },
        setNavLogo(state, action) {
            state.logo = action.payload;
        },
        toggleComments(state, action) {
            state.posts[action.payload].showComments = !state.posts[action.payload].showComments;
        },
        getCommentsPending(state, action) {
            state.posts[action.payload].commentsLoading = true;
            state.posts[action.payload].commentsError = false;
        },
        getCommentsError(state, action) {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].commentsError = true;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].commentsError = true;
        },
    }
})

export const {
    setPosts,
    getPostsPending,
    getPostsError,
    getPostsSuccess,
    setSearchTerm,
    setSubbredit,
    setNavLogo,
    toggleComments,
    getCommentsPending,
    getCommentsError,
    getCommentsSuccess
} = postSlice.actions;

export default postSlice.reducer;