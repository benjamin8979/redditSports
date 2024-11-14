import React, { useEffect } from "react";
import {Post} from './Post';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectFilteredPosts, selectPosts, fetchComments, changeVote } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const filteredPosts = useSelector(selectFilteredPosts);
    console.log(filteredPosts);
    const isLoading = useSelector((state) => state.posts.isLoading);

    // useEffect(() => {
    //     dispatch(fetchPosts());
    // }, [dispatch])

    const onToggleComents = (index) => {
        dispatch(fetchComments(index));
    }

    const onVote = (index, change, status) => {
        dispatch(changeVote({index, change, status}));
    }

    return (
        <div className={styles.Posts}>
            {isLoading ? <p>Loading posts...</p> : filteredPosts && filteredPosts.length > 0 ? filteredPosts.map(post => 
                <Post 
                key = {post.id}
                id = {post.id}
                comments = {post.comments}
                showComments = {post.showComments}
                commentsLoading = {post.commentsLoading}
                commentsError = {post.commentsError}
                voteCount = {post.score}
                voteStatus = {post.voteStatus}
                post = {post.title}
                image = {post.url}
                video = {post.media && post.media.reddit_video ? post.media.reddit_video.fallback_url : ""}
                link = {post.media && post.media.oembed ? post.media.oembed.url : ""}
                author = {post.author}
                time = {post.created}
                toggleComments = {onToggleComents}
                vote = {onVote}
                />
            ) : <p>No posts available</p>}
        </div>
    )
}