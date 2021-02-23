import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, logout, login: loginName}) => {
    return <header className={classes.header}>
        <img src='https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png' alt='logo'/>
        <div className={classes.loginBlock}>
            {isAuth &&
            <div>{loginName} - <button onClick={logout}>Logout</button></div>}
            {!isAuth &&
            <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}
export default Header;