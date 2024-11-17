import React from "react";
import styles from './Comments.module.css';

export function Comment(props) {
    const {author, time, comment, index, last} = props;
    return (
        <div className={index === 0 ? styles.topComment : (index === last ? styles.bottomComment : styles.Comment)}>
            <div className={styles.heading}>
                <span>{author}</span>
                <span>{time}</span>
            </div>
            <p className={styles.content}>{comment}</p>
        </div>
    )
}