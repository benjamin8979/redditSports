import React from "react";
import styles from './Post.module.css';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

export function Post() {
    return(
        <div className="Post">
            <div className="votes">
                <button>
                    <TiArrowUpOutline />
                </button>
                <span></span>
                <button>
                    <TiArrowDownOutline />
                </button>
            </div>
            <title></title>
            <img/>
            <span className="author"></span>
            <span className="time"></span>
            <div className="comments">
                <TiMessage />
                <span className="num-comments"></span>
            </div>
        </div>
    )
}