import React from "react";
import {NavLink} from "react-router-dom";
import {FlexItemNavbar, StyledNavbar} from "./NavbarStyled";

const Navbar = () => {
    return (
        <FlexItemNavbar>

            <StyledNavbar>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/music'>Music</NavLink>
                <NavLink to='/settings'>Settings</NavLink>
            </StyledNavbar>

        </FlexItemNavbar>
    )
}
export default Navbar;