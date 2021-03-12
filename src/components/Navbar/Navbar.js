import React from "react";
import {NavLink} from "react-router-dom";
import {FlexItemNavbar, StyledNavbar} from "./NavbarStyled";
import styled from "styled-components";

export const NavLinkFake = styled.div`
   padding-bottom:10px;
    a{
        color:grey;
        :visited{
            color:grey;
        }
        :hover{
            color:grey;
        }
        cursor:default;
    }
`


const Navbar = () => {
    return (
        <FlexItemNavbar>
            <StyledNavbar>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/dialogs'>Messages</NavLink>

                <NavLinkFake>
                    <NavLink to='*'>News</NavLink>
                </NavLinkFake>
                <NavLinkFake>
                    <NavLink to='*'>Music</NavLink>
                </NavLinkFake>
                <NavLinkFake>
                    <NavLink to='*'>Settings</NavLink>
                </NavLinkFake>
            </StyledNavbar>
        </FlexItemNavbar>
    )
}
export default Navbar;