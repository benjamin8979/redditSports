import React from "react";
import styles from './Comments.module.css';

export function Comment(props) {
    const {author, time, comment} = props;
    return (
        <div className={styles.Comment}>
            <div className={styles.heading}>
                <span>{author}</span>
                <span>{time}</span>
            </div>
            <p className={styles.content}>{comment}</p>
        </div>
    )
}