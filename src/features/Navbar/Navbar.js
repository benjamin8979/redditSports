import React, { useEffect, useState } from "react";
import styles from './Navbar.module.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdSportsBasketball } from "react-icons/md";
import { selectNavLogo, selectSearchTerm, setSearchTerm } from "../Posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";


export function Navbar() {

    const dispatch = useDispatch();
    const [term, setTerm] = useState('');
    const logo = useSelector(selectNavLogo);
    const changedTerm = useSelector(selectSearchTerm);

    const onTermChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div className={styles.Nav}>
            <div className={styles.logo}>
                <h3 className={styles.h3}>Reddit<span className={styles.span}>Sports</span></h3>
                <img src={logo} className={styles.sport}/>
            </div>
            
            <form className={styles.form}> 
                <input className={styles.input} type="text" placeholder="Search" value={term} onChange={onTermChange}/>
                <button className={styles.button} type="submit">
                    <HiOutlineSearch className={styles.search}/>
                </button>
            </form>
        </div>
    )

}
