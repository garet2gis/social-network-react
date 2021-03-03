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

export const StyledNavbar = styled.nav`
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