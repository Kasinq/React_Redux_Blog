import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact me</NavLink>
        </header>
    )
}

export default Header