import React from "react";
import {Post} from './Post';
import './Posts.css';

const posts = [];

export function Posts() {
    return (
        <div className="Posts">
            {posts ? posts.map(post => <Post />) : ""}
        </div>
    )
}