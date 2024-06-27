import React, { useEffect } from "react";
import styles from './Subreddits.module.css';
import { Subreddit } from "./Subreddit";
import { useDispatch, useSelector } from "react-redux";
import {fetchSubs, selectSubs} from "./subredditSlice";

export function Subreddits() {
    const dispatch = useDispatch();
    const subs = useSelector(selectSubs);
    console.log(subs);

    useEffect(() => {
        dispatch(fetchSubs());
    }, [dispatch])

    return (
        <div className={styles.Subreddits}>
            <h2 className={styles.header}>Subreddits</h2>
            <div className={styles.list}>
                {subs ? subs.map(sub => 
                    <button key={sub.id} className={styles.button} type="button">
                        <Subreddit 
                            name={sub.name}
                            image={sub.image}
                        />
                    </button>
                ) : ""}
            </div>
            
        </div>
    )
}