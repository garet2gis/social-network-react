import React from "react";
import {NavLink} from "react-router-dom";
import {FlexItemNavbar, StyledNavbar} from "./NavbarStyledComponents";

const Navbar = () => {
    return (
        <FlexItemNavbar>
            <StyledNavbar>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/music'>Music</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </StyledNavbar>
        </FlexItemNavbar>
    )
}
export default Navbar;