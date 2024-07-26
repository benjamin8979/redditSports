import React from "react";
import styles from './Post.module.css';
import {Comment} from "../Comments/Comment";
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

export function Post(props) {
    const {id, voteCount, comments, showComments, commentsLoading, commentsError, post, media, author, time, toggleComments} = props;

    const displayComments = () => {
        console.log(comments);
        if (commentsError) {
            return (
                <div>
                    <h3>Error Loading Comments</h3>
                </div>
            );
        }
        else if (commentsLoading) {
            return 
            <div>
                <h3>Comments Loading</h3>
            </div>
        }
        else if (showComments) {
            return (
                <div>
                    {comments ? comments.map(comment => 
                    <Comment 
                      comment = {comment.comment}
                      author = {comment.author}
                      time = {comment.time}
                    />) : "NOTHING"}
                </div>
            )
        }
        return <div></div>;
    }

    return(
        <div className={styles.Post}>
            <div className={styles.postNoComments}>
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
                        <div>
                            <button className={styles.commentButton} onClick={() => toggleComments(id-1)}><TiMessage className={styles.commentIcon}/></button>
                            <span className="num-comments"></span>
                        </div>
                    </div>
                </div>
            </div>
            {displayComments()}
        </div>
        
    )
}