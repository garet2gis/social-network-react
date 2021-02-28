import React from "react";
import {NavLink} from "react-router-dom";
import {StyledHeader, StyledLogo} from "./StyledHeader";


const Header = ({isAuth, logout, login: loginName}) => {
    return <StyledHeader paddingTopBottom = '10px'>
        <StyledLogo width = "30px">
            <img src='https://i.pinimg.com/originals/9a/3b/90/9a3b902ff415e1a95368f1bf2b9ecca8.png' alt='logo'/>
        </StyledLogo>
        <div>
            {isAuth &&
            <div>{loginName} - <button onClick={logout}>Logout</button></div>}
            {!isAuth &&
            <NavLink to='/login'>Login</NavLink>}
        </div>
    </StyledHeader>
}
export default Header;