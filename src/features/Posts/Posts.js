import React, { useEffect } from "react";
import {Post} from './Post';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectFilteredPosts, selectPosts, fetchComments } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const filteredPosts = useSelector(selectFilteredPosts);
    console.log(filteredPosts);

    useEffect(() => {
        console.log("FETCHED")
        dispatch(fetchPosts());
    }, [dispatch])

    const onToggleComents = (index) => {
        dispatch(fetchComments(index));
    }

    return (
        <div className={styles.Posts}>
            {filteredPosts ? filteredPosts.map(post => 
                <Post 
                key = {post.id}
                id = {post.id}
                comments = {post.comments}
                showComments = {post.showComments}
                commentsLoading = {post.commentsLoading}
                commentsError = {post.commentsError}
                voteCount = {post.voteCount}
                post = {post.post}
                media = {post.media}
                author = {post.author}
                time = {post.time}
                toggleComments = {onToggleComents}
                />
            ) : ""}
        </div>
    )
}