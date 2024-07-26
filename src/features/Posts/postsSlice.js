import { createSlice, createSelector } from "@reduxjs/toolkit";
import { postsData } from '../../data/mockData';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    subreddit: "Home",
    logo: "https://styles.redditmedia.com/t5_6/styles/communityIcon_a8uzjit9bwr21.png"
}

const postsSlice = createSlice({
    name: "posts",
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
            state.isLoading = false;
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSubbredit(state, action) {
            console.log("Sub changed")
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
            if (!state.posts[action.payload].showComments) {
                return;
            }
            state.posts[action.payload].commentsLoading = true;
            state.posts[action.payload].commentsError = false;
        },
        getCommentsError(state, action) {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].commentsError = true;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].commentsLoading = false;
            state.posts[action.payload.index].commentsError = false;
            state.posts[action.payload.index].comments = action.payload.postComments;
        }
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
} = postsSlice.actions;

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts.posts;
export const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSubreddit = (state) => state.posts.subreddit;
export const selectNavLogo = (state) => state.posts.logo;


export const selectFilteredPosts = createSelector([selectPosts, selectSearchTerm],(posts, searchTerm) => {
    if (searchTerm === '' || searchTerm === "RESET") {
        console.log("BLANK");
        console.log(posts);
        return posts;
    }
    const filteredPosts = posts.filter((post) => post.post.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log("FULL");
    console.log(searchTerm)
    console.log(posts);
    return filteredPosts;
});

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(getPostsPending());
        const posts = await postsData;
        dispatch(getPostsSuccess(posts));
    }
    catch (error) {
        dispatch(getPostsError());
    }
}

export const fetchComments = (index) => async (dispatch) => {
    try {
        dispatch(toggleComments(index));
        dispatch(getCommentsPending(index));
        const posts = await postsData;
        const postComments = posts[index].comments;
        dispatch(getCommentsSuccess({index, postComments}));
    }
    catch (error) {
        dispatch(getCommentsError(index));
    }
}