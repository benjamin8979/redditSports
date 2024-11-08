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
    const {id, voteCount, voteStatus, comments, showComments, commentsLoading, commentsError, post, media, author, time, toggleComments, vote} = props;

    const upVote = () => {
        if (voteStatus == 0) {
            vote(id, 1, 2);
        }
        if (voteStatus == 1) {
            vote(id, 2, 2);
        }
        if (voteStatus == 2) {
            vote(id, -1, 0);
        }
    }

    const downVote = () => {
        if (voteStatus == 0) {
            vote(id, -1, 1);
        }
        if (voteStatus == 2) {
            vote(id, -2, 1);
        }
        if (voteStatus == 1) {
            vote(id, 1, 0);
        }
    }

    const getTime = (created) => {
        const now = Date.now() / 1000;
        const timeChange = now - created;
        const minutes = Math.floor(timeChange / 60);
        const hours = Math.floor(minutes / 60);
        if (hours >= 24) {
            return `${Math.floor(hours / 24)} day${Math.floor(hours / 24) > 1 ? 's' : ''} ago`;
        } 
        else if (hours == 0) {
            return `${hours} hour${minutes > 1 || minutes == 0 ? 's' : ''} ago`;
        }
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const displayComments = () => {
        //console.log(comments);
        if (commentsError) {
            return (
                <div>
                    <h3>Error Loading Comments</h3>
                </div>
            );
        }
        else if (commentsLoading) {
            return (
            <div>
                <h3>Comments Loading</h3>
            </div>
            );
        }
        else if (showComments) {
            return (
                <div>
                    {comments ? comments.map(comment => 
                    <Comment 
                      comment = {comment.comment}
                      author = {comment.author}
                      time = {comment.time}
                    />) : <p>No comments to display</p>}
                </div>
            )
        }
        return <div></div>;
    }

    return(
        <div className={styles.Post}>
            <div className={styles.postNoComments}>
                <div className={styles.voteContainer}>
                    <div className={styles.votes}>
                        {voteStatus == 2 ? 
                        <button className={`${styles.button} ${styles.upSelected}`}
                        onClick = {upVote}
                    >
                        <TiArrowUpThick />
                    </button>
                        : 
                        <button className={`${styles.button} ${styles.up}`}
                        onClick = {upVote}
                        >
                            <TiArrowUpOutline />
                        </button>
                        }
                        
                        <span>{voteCount}</span>
                        {voteStatus == 1 ? 
                        <button className={`${styles.button} ${styles.downSelected}`}
                            onClick = {downVote}
                        >
                            <TiArrowDownThick />
                        </button>
                        :
                        <button className={`${styles.button} ${styles.down}`}
                        onClick = {downVote}
                        >
                            <TiArrowDownOutline />
                        </button>
                        }
                        
                    </div>
                </div>
                <div className={styles.postBody}>
                    <h2>{post}</h2>
                    <img src={media} alt="Post media" style={{display: media ? 'block' : 'none'}}/>
                    <div className={styles.footer}>
                        <span>{author}</span>
                        <span className={styles.footItem}>{getTime(time)}</span>
                        <div className={styles.footItem}>
                            <button className={styles.commentButton} onClick={() => toggleComments(id-1)}><TiMessage className={styles.commentIcon}/></button>
                            <span className={styles.commentCount}>{comments ? comments.length : 0}</span>
                        </div>
                    </div>
                </div>
            </div>
            {displayComments()}
        </div>
        
    )
}