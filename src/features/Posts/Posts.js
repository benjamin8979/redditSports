import React, { useEffect } from "react";
import {Post} from './Post';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectFilteredPosts, selectPosts } from "./postsSlice";

export function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const filteredPosts = useSelector(selectFilteredPosts);
    console.log(posts);

    useEffect(() => {
        console.log("FETCHED")
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div className={styles.Posts}>
            {filteredPosts ? filteredPosts.map(post => 
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