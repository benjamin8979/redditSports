import React from "react";
import './Navbar.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdSportsBasketball } from "react-icons/md";


export function Navbar() {
    return (
        <div className="Nav">
            <div className="logo">
                <h3>Reddit<span>Sports</span></h3>
                <MdSportsBasketball className="sport"/>
            </div>
            
            <form>
                <input type="text" placeholder="Search"/>
                <button type="submit">
                    <HiOutlineSearch className="search"/>
                </button>
            </form>
        </div>
    )

}
