import React from "react";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 15vh;
    text-align: center;
    color:${props => props.theme.colorPalettes.second.body};
`

const Footer = () => {
    return <StyledFooter>
        <h2>Footer</h2>
    </StyledFooter>
}
export default Footer;