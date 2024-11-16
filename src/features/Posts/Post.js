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
    const {index, voteCount, voteStatus, comments, showComments, commentsLoading, commentsError, post, image, video, link, author, time, toggleComments, vote, numComments} = props;

    const upVote = () => {
        if (voteStatus == 0) {
            vote(index, 1, 2);
        }
        if (voteStatus == 1) {
            vote(index, 2, 2);
        }
        if (voteStatus == 2) {
            vote(index, -1, 0);
        }
    }

    const downVote = () => {
        if (voteStatus == 0) {
            vote(index, -1, 1);
        }
        if (voteStatus == 2) {
            vote(index, -2, 1);
        }
        if (voteStatus == 1) {
            vote(index, 1, 0);
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
                    {comments ? comments.map((comment, index) => 
                    <Comment
                      comment = {comment.body}
                      author = {comment.author}
                      time = {getTime(comment.created)}
                      index = {index}
                      last = {comments.length - 1}
                      key = {index}
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
                    <h2 className={styles.postTitle}>{post}</h2>
                    <img src={image} alt="" style={{display: image ? 'block' : 'none'}}/>
                    <video style={{display: video ? 'block' : 'none'}} controls>
                        <source src={video}></source>
                    </video>
                    <a href={link}tyle={{display: link ? 'block' : 'none'}}>{link}</a>
                    <div className={styles.footer}>
                        <span>{author}</span>
                        <span className={styles.footItem}>{getTime(time)}</span>
                        <div className={styles.footItem}>
                            <button className={styles.commentButton} onClick={() => toggleComments(index)}><TiMessage className={styles.commentIcon}/></button>
                            <span className={styles.commentCount}>{numComments}</span>
                        </div>
                    </div>
                </div>
            </div>
            {displayComments()}
        </div>
        
    )
}