import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}> Profile</div>
            <div className={classes.item}> Messages</div>
            <div className={classes.item}> News</div>
            <div className={classes.item}> Music</div>
            <div className={classes.item}> Settings</div>
        </nav>
    )
}
export default Navbar;