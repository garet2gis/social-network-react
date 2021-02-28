import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const FlexItemNavbar = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 20%;
    max-width: 20%;
    background: pink;
    @media ${props => props.theme.media.phone}{
        flex: 0 0 100%;
        max-width: 100%;
    }
`

const StyledNavbar = styled.nav`
    display: flex;
    flex-direction: column;
    a{
        color: white;
        text-decoration: none;
        &:hover{
            color: darkred;
        }
    }
    padding: 10px;
`

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