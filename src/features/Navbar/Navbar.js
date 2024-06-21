import React from "react";
import styles from './Navbar.module.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdSportsBasketball } from "react-icons/md";


export function Navbar() {
    return (
        <div className={styles.Nav}>
            <div className={styles.logo}>
                <h3 className={styles.h3}>Reddit<span className={styles.span}>Sports</span></h3>
                <MdSportsBasketball className={styles.sport}/>
            </div>
            
            <form className={styles.form}> 
                <input className={styles.input} type="text" placeholder="Search"/>
                <button className={styles.button} type="submit">
                    <HiOutlineSearch className={styles.search}/>
                </button>
            </form>
        </div>
    )

}
