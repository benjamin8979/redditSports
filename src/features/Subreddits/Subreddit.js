import React from "react";
import styles from './Subreddit.module.css';

export function Subreddit(props) {
    const {name, image} = props;
    return (
        <div className={styles.Subreddit}>
            <img className={styles.img} src={image}/>
            <span className={styles.name}>{name}</span>
        </div>
    )
}