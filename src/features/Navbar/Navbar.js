import React, { useEffect, useState } from "react";
import styles from './Navbar.module.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { selectNavLogo, selectSearchTerm, setSearchTerm } from "../Posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { sportsSubs } from '../../data/data';


export function Navbar() {

    const dispatch = useDispatch();
    const [term, setTerm] = useState('');
    const logo = useSelector(selectNavLogo);
    const changedTerm = useSelector(selectSearchTerm);

    const onTermChange = (e) => {
       setTerm(e.target.value);
    }

    useEffect(() => {
        setTerm(changedTerm);
    }, [changedTerm]);

    const submitAction = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(term));
    }

    const defaultImg = e => {
        e.target.src = sportsSubs[0].image;
    }

    return (
        <div className={styles.Nav}>
            <div className={styles.logo}>
                <h3 className={styles.h3}>Reddit<span className={styles.span}>Sports</span></h3>
                <img src={logo} className={styles.sport} onError={defaultImg} alt=""/>
            </div>
            
            <form className={styles.form}> 
                <input className={styles.input} type="text" placeholder="Search" value={term} onChange={onTermChange}/>
                <button className={styles.button} type="submit" onClick={submitAction}>
                    <HiOutlineSearch className={styles.search}/>
                </button>
            </form>
        </div>
    )

}
