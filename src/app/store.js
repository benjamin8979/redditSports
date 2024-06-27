import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/Subreddits/subredditSlice';
import postsReducer from '../features/Posts/postsSlice';

export const store = configureStore({
  reducer: {
    subreddit: subredditReducer,
    posts: postsReducer
  },
});
