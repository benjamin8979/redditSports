import React, { useEffect } from "react";
import {Post} from './Post';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    console.log(posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div className={styles.Posts}>
            {posts ? posts.map(post => 
            <Post 
            key = {post.id}
            voteCount = {post.voteCount}
            post = {post.post}
            media = {post.media}
            author = {post.author}
            time = {post.time}
            />
            ) : ""}
        </div>
    )
}