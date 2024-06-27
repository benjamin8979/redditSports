import React from "react";
import styles from './Post.module.css';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

export function Post(props) {
    const {voteCount, post, media, author, time} = props;
    return(
        <div className={styles.Post}>
            <div className={styles.votes}>
                <button className={styles.button}>
                    <TiArrowUpOutline />
                </button>
                <span>{voteCount}</span>
                <button className={`${styles.button} ${styles.down}`}>
                    <TiArrowDownOutline />
                </button>
            </div>
            <div className={styles.postBody}>
                <h2>{post}</h2>
                <img src={media}/>
                <div className={styles.footer}>
                    <span>{author}</span>
                    <span>{time}</span>
                    <div className={styles.comments}>
                        <TiMessage />
                        <span className="num-comments"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}