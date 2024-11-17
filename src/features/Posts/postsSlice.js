import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchSubredditPosts, fetchPostComments } from '../../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    subreddit: "Sports",
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
            console.log("Pending");
            state.error = false;
            state.isLoading = true;
        },
        getPostsError(state) {
            console.log("Error");
            state.error = true;
            state.isLoading = false;
        },
        getPostsSuccess(state, action) {
            console.log("Success");
            state.error = false;
            state.isLoading = false;
            const newPosts = action.payload;
            newPosts.forEach((post, index) => {
                post.voteStatus = 0;
                post.index = index;
                post.showComments = false;
                // post.comments = [];
                post.commentsLoading = false;
                post.commentsError = false;

            })
            state.posts = newPosts;
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
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        changeVote(state, action) {
            if (state.posts[action.payload.index].voteStatus === 0 || state.posts[action.payload.index].voteStatus !== action.payload.status) {
                state.posts[action.payload.index].score += action.payload.change;
            }
            state.posts[action.payload.index].voteStatus = action.payload.status;
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
    getCommentsSuccess,
    changeVote
} = postsSlice.actions;

export default postsSlice.reducer;

export const selectPosts = (state) => state.posts.posts;
export const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSubreddit = (state) => state.posts.subreddit;
export const selectNavLogo = (state) => state.posts.logo;


export const selectFilteredPosts = createSelector([selectPosts, selectSearchTerm],(posts, searchTerm) => {
    if (searchTerm === '' || searchTerm === "RESET") {
        return posts;
    }
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredPosts;
});

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(getPostsPending());
        const posts = await fetchSubredditPosts(subreddit);
        dispatch(getPostsSuccess(posts));
    }
    catch (error) {
        dispatch(getPostsError());
    }
}

export const fetchComments = (post, index) => async (dispatch) => {
    try {
        dispatch(toggleComments(index));
        dispatch(getCommentsPending(index));
        const comments = await fetchPostComments(post);
        comments.pop();
        dispatch(getCommentsSuccess({index, comments}));
    }
    catch (error) {
        dispatch(getCommentsError(index));
    }
}