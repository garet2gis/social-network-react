import React from "react";
import {HeaderStyled, StyledLogin, StyledLogo, StyledNavLink} from "./HeaderStyled";
import {StyledButton} from "../styled/StyledButton";
import logo from '../../logo.svg'

const Header = ({isAuth, logout, login: loginName}) => {
    return (
        <HeaderStyled paddingTopBottom='10px'>
            <StyledLogo width="50px">
                <img src={logo} alt='logo'/>
            </StyledLogo>
            <div>
                {isAuth &&
                <div><StyledLogin>login: {loginName}</StyledLogin><StyledButton type='button' value='Logout'
                                                                                onClick={logout}/></div>}
                {!isAuth &&
                <StyledNavLink to='/login'>Login</StyledNavLink>}
            </div>
        </HeaderStyled>
    )
}

export default Header;