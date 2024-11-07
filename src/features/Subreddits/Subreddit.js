import React from "react";
import styles from './Subreddit.module.css';
import {sportsSubs} from '../../data/data';

export function Subreddit(props) {
    const {name, image} = props;
    const defaultImg = e => {
        e.target.src = sportsSubs[0].image;
    }
    return (
        <div className={styles.Subreddit}>
            <img className={styles.img} src={image} alt={`${name}`} onError={defaultImg}/>
            <span className={styles.name}>{name}</span>
        </div>
    )
}