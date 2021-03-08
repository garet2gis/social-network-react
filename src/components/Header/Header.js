import React from "react";
import {NavLink} from "react-router-dom";
import {HeaderStyledComponents, StyledLogo} from "./HeaderStyledComponents";
import styled from "styled-components";
import {StyledButton} from "../styled/StyledButton";
import logo from '../../logo.svg'

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    border-radius: ${props => props.theme.borderRadius||"0px"};
    min-width:60px;
    min-height:30px;
    font-size: 15px;
    display:inline-block;
    padding:0.2em 1.45em;
    margin:0.1em;
    border:0.15em solid ${props => props.theme.colorPalettes.second.other};
    color:white;
    background-color:${props => props.theme.colorPalettes.second.other};
    text-align:center;
    cursor:pointer;
    font-weight:500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue";
    &:hover {
        border-color:#4c8da1;
        background-color:#3b7b8f;
    }
    &:active {
        background-color:#51737d;
        outline: 0;
    }
    &:focus {
    background-color:#51737d;
        outline: 0;
    }
    @media all and (max-width:30em){
        display:block;
        margin:0.2em auto;
    }
`
export const StyledLogin = styled.span`
margin-right: 40px;
color: ${props => props.theme.colorPalettes.second.body};

`


const Header = ({isAuth, logout, login: loginName}) => {
    return <HeaderStyledComponents paddingTopBottom = '10px'>
        <StyledLogo width = "50px">
            <img src={logo} alt='logo'/>
        </StyledLogo>
        <div>
            {isAuth &&
            <div><StyledLogin>login: {loginName}</StyledLogin><StyledButton type='button' value='Logout' onClick={logout}/></div>}
            {!isAuth &&
            <StyledNavLink to='/login'>Login</StyledNavLink>}
        </div>
    </HeaderStyledComponents>
}
export default Header;