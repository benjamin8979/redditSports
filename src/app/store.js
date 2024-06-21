import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/Subreddits/subredditSlice';

export const store = configureStore({
  reducer: {
    subreddit: subredditReducer
  },
});
