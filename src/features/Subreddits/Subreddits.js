import React, { useEffect } from "react";
import styles from './Subreddits.module.css';
import { Subreddit } from "./Subreddit";
import { useDispatch, useSelector } from "react-redux";
import {fetchSubs, selectSubs} from "./subredditSlice";
import {selectSubreddit, setSubbredit, setNavLogo, setSearchTerm, fetchPosts} from "../Posts/postsSlice";

export function Subreddits() {
    const dispatch = useDispatch();
    const subs = useSelector(selectSubs);
    let selected = useSelector(selectSubreddit);
    console.log(selected);

    useEffect(() => {
        dispatch(fetchSubs());
        dispatch(fetchPosts(selected));
    }, [dispatch, selected])

    const buttonClicked = (newSub, newNav) => {
        dispatch(setSubbredit(newSub));
        dispatch(setNavLogo(newNav));
    }

    return (
        <div className={styles.Subreddits}>
            <h2 className={styles.header}>Subreddits</h2>
            <div className={styles.list}>
                {subs ? subs.map(sub => 
                    <button 
                    onClick={() => {buttonClicked(sub.name, sub.image)}} 
                    key={sub.id} 
                    className={selected === sub.name ? styles.selected : styles.button} 
                    type="button"
                    aria-label={`Select ${sub.name}`}>
                        <Subreddit 
                            name={sub.name}
                            image={sub.image}
                        />
                    </button>
                ) : <p>No subreddits available.</p>}
            </div>
            
        </div>
    )
}