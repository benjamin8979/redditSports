import React from "react";
import './Subreddit.css';
import { Subreddit } from "./Subreddit";

const subs = [];

export function Subreddits() {
    return (
        <div className="Subreddits">
            <h2>Subreddits</h2>
            {subs ? subs.map(sub => <Subreddit />) : ""}
        </div>
    )
}